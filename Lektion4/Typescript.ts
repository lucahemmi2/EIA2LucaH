// Typdefinitionen für eventuelle Elemente
const form = document.getElementById("task-form") as HTMLFormElement;
const taskContainer = document.querySelector(".task-container") as HTMLElement;
const newTaskButton = document.querySelector(".edit-btn") as HTMLButtonElement;
const loadingIndicator = document.getElementById("loading-indicator") as HTMLElement;

// Sichtbarkeit des Formulars umschalten
function toggleForm() {
    if (form) {
        form.classList.toggle("hidden");
    }
}

// Aufgabe hinzufügen und an Server senden
async function addTask(event: Event) {
    event.preventDefault();

    // Eingabewerte erfassen
    const title = (document.getElementById("task-title") as HTMLInputElement).value;
    const dueDate = (document.getElementById("task-due-date") as HTMLInputElement).value;
    const assignee = (document.getElementById("task-assignee") as HTMLInputElement).value;
    const comment = (document.getElementById("task-comment") as HTMLInputElement).value;

    // Neue Aufgabe anzeigen
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

    // Bearbeiten- und Löschen-Funktionalität hinzufügen
    const editButton = taskDiv.querySelector(".edit-btn") as HTMLButtonElement;
    editButton.addEventListener("click", () => editTask(taskDiv, title, dueDate, assignee, comment));
    const deleteButton = taskDiv.querySelector(".delete-btn") as HTMLButtonElement;
    deleteButton.addEventListener("click", () => deleteTask(taskDiv));

    // Aufgabe zum Container hinzufügen
    if (taskContainer) {
        taskContainer.appendChild(taskDiv);
    }

    form.reset();
    toggleForm();

    // Server über die neue Aufgabe benachrichtigen
    showLoadingIndicator(true);
    try {
        await fetch("https://example.com/api/addTask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, dueDate, assignee, comment })
        });
    } catch (error) {
        console.error("Fehler beim Senden der Aufgabe:", error);
    } finally {
        showLoadingIndicator(false);
    }
}

// Bearbeiten einer vorhandenen Aufgabe
function editTask(taskDiv: HTMLElement, title: string, dueDate: string, assignee: string, comment: string) {
    (document.getElementById("task-title") as HTMLInputElement).value = title;
    (document.getElementById("task-due-date") as HTMLInputElement).value = dueDate;
    (document.getElementById("task-assignee") as HTMLInputElement).value = assignee;
    (document.getElementById("task-comment") as HTMLInputElement).value = comment;
    toggleForm();

    form.onsubmit = (event: Event) => {
        event.preventDefault();
        const newTitle = (document.getElementById("task-title") as HTMLInputElement).value;
        const newDueDate = (document.getElementById("task-due-date") as HTMLInputElement).value;
        const newAssignee = (document.getElementById("task-assignee") as HTMLInputElement).value;
        const newComment = (document.getElementById("task-comment") as HTMLInputElement).value;

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

        // Event-Listener wieder hinzufügen
        const editButton = taskDiv.querySelector(".edit-btn") as HTMLButtonElement;
        editButton.addEventListener("click", () => editTask(taskDiv, newTitle, newDueDate, newAssignee, newComment));
        const deleteButton = taskDiv.querySelector(".delete-btn") as HTMLButtonElement;
        deleteButton.addEventListener("click", () => deleteTask(taskDiv));

        form.reset();
        toggleForm();
    };
}

// Löschen einer Aufgabe
function deleteTask(taskDiv: HTMLElement) {
    taskDiv.remove();
}

// Laden der Startdaten aus JSON-Datei
async function loadInitialData() {
    showLoadingIndicator(true);
    try {
        const response = await fetch("tasks.json");
        const tasks = await response.json();
        tasks.forEach((task: { title: string; dueDate: string; assignee: string; comment: string }) => {
            addTaskToUI(task.title, task.dueDate, task.assignee, task.comment);
        });
    } catch (error) {
        console.error("Fehler beim Laden der Startdaten:", error);
    } finally {
        showLoadingIndicator(false);
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
    const editButton = taskDiv.querySelector(".edit-btn") as HTMLButtonElement;
    editButton.addEventListener("click", () => editTask(taskDiv, title, dueDate, assignee, comment));
    const deleteButton = taskDiv.querySelector(".delete-btn") as HTMLButtonElement;
    deleteButton.addEventListener("click", () => deleteTask(taskDiv));
    taskContainer.appendChild(taskDiv);
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
document.addEventListener("DOMContentLoaded", loadInitialData);
