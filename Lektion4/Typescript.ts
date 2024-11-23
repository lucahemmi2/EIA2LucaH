// Typdefinitionen für eventuelle Elemente
const form = document.getElementById("task-form") as HTMLFormElement;
const taskContainer = document.querySelector(".task-container") as HTMLElement;
const newTaskButton = document.querySelector(".edit-btn") as HTMLButtonElement;
const loadingIndicator = document.getElementById("loading-indicator") as HTMLElement;

// Zentrale Funktion für CRUD-Operationen
async function executeQuery(command: string, data: any = {}): Promise<any> {
    const url = "https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/lhe48151/mingidb.php";
    const query = new URLSearchParams();
    query.set("command", command);
    query.set("collection", "Tasks");
    query.set("data", JSON.stringify(data));

    try {
        const response = await fetch(`${url}?${query.toString()}`, { method: "GET" });
        const result = await response.json();
        console.log(`MingiDB ${command} Response:`, result);
        return result;
    } catch (error) {
        console.error(`MingiDB ${command} Error:`, error);
    }
}

// Sichtbarkeit des Formulars umschalten
function toggleForm() {
    if (form) {
        form.classList.toggle("hidden");
    }
}

// Aufgabe zur Benutzeroberfläche hinzufügen
function addTaskToUI(title: string, dueDate: string, assignee: string, comment: string) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Fällig bis:</strong> ${new Date(dueDate).toLocaleString()}</p>
        <p><strong>Bearbeiter:</strong> ${assignee}</p>
        <p><strong>Kommentar:</strong> ${comment}</p>
        <div class="task-footer">
            <button class="edit-btn">Bearbeiten</button>
            <button class="delete-btn">Löschen</button>
        </div>
    `;
    taskContainer.appendChild(taskDiv);

    const editButton = taskDiv.querySelector(".edit-btn") as HTMLButtonElement;
    editButton.addEventListener("click", () => editTask(taskDiv, title, dueDate, assignee, comment));
    const deleteButton = taskDiv.querySelector(".delete-btn") as HTMLButtonElement;
    deleteButton.addEventListener("click", () => deleteTask(taskDiv));
}

// Aufgabe hinzufügen (Create)
async function addTask(event: Event): Promise<void> {
    event.preventDefault();

    const title = (document.getElementById("task-title") as HTMLInputElement).value;
    const dueDate = (document.getElementById("task-due-date") as HTMLInputElement).value;
    const assignee = (document.getElementById("task-assignee") as HTMLInputElement).value;
    const comment = (document.getElementById("task-comment") as HTMLInputElement).value;

    await executeQuery("insert", { title, dueDate, assignee, comment });
    addTaskToUI(title, dueDate, assignee, comment);

    form.reset();
    toggleForm();
}

// Aufgaben aus der Datenbank laden (Read)
async function loadTasksFromDB(): Promise<void> {
    showLoadingIndicator(true);
    const tasks = await executeQuery("find", {});
    if (tasks) {
        tasks.forEach((task: any) => addTaskToUI(task.title, task.dueDate, task.assignee, task.comment));
    }
    showLoadingIndicator(false);
}

// Aufgabe bearbeiten (Update)
function editTask(taskDiv: HTMLElement, title: string, dueDate: string, assignee: string, comment: string): void {
    (document.getElementById("task-title") as HTMLInputElement).value = title;
    (document.getElementById("task-due-date") as HTMLInputElement).value = dueDate;
    (document.getElementById("task-assignee") as HTMLInputElement).value = assignee;
    (document.getElementById("task-comment") as HTMLInputElement).value = comment;
    toggleForm();

    form.onsubmit = async (event: Event) => {
        event.preventDefault();

        const newTitle = (document.getElementById("task-title") as HTMLInputElement).value;
        const newDueDate = (document.getElementById("task-due-date") as HTMLInputElement).value;
        const newAssignee = (document.getElementById("task-assignee") as HTMLInputElement).value;
        const newComment = (document.getElementById("task-comment") as HTMLInputElement).value;

        await executeQuery("update", { title: newTitle, dueDate: newDueDate, assignee: newAssignee, comment: newComment });

        taskDiv.innerHTML = `
            <h2>${newTitle}</h2>
            <p><strong>Fällig bis:</strong> ${new Date(newDueDate).toLocaleString()}</p>
            <p><strong>Bearbeiter:</strong> ${newAssignee}</p>
            <p><strong>Kommentar:</strong> ${newComment}</p>
            <div class="task-footer">
                <button class="edit-btn">Bearbeiten</button>
                <button class="delete-btn">Löschen</button>
            </div>
        `;

        const editButton = taskDiv.querySelector(".edit-btn") as HTMLButtonElement;
        editButton.addEventListener("click", () => editTask(taskDiv, newTitle, newDueDate, newAssignee, newComment));
        const deleteButton = taskDiv.querySelector(".delete-btn") as HTMLButtonElement;
        deleteButton.addEventListener("click", () => deleteTask(taskDiv));

        form.reset();
        toggleForm();
    };
}

// Aufgabe löschen (Delete)
async function deleteTask(taskDiv: HTMLElement): Promise<void> {
    await executeQuery("delete", { title: taskDiv.querySelector("h2")?.textContent });
    taskDiv.remove();
}

// Anzeige für den Ladeprozess ein- und ausschalten
function showLoadingIndicator(visible: boolean) {
    if (loadingIndicator) {
        loadingIndicator.classList.toggle("hidden", !visible);
    }
}

// Event-Listener initialisieren
newTaskButton.addEventListener("click", toggleForm);
form.addEventListener("submit", addTask);
document.addEventListener("DOMContentLoaded", loadTasksFromDB);
