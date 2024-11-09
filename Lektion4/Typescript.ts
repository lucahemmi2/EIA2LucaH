function toggleForm() {
    const form = document.getElementById("task-form") as HTMLFormElement;
    form.classList.toggle("hidden");
}

function addTask(event: Event) {
    event.preventDefault();

    const title = (document.getElementById("task-title") as HTMLInputElement).value;
    const dueDate = (document.getElementById("task-due-date") as HTMLInputElement).value;
    const assignee = (document.getElementById("task-assignee") as HTMLInputElement).value;
    const comment = (document.getElementById("task-comment") as HTMLInputElement).value;

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

    const taskContainer = document.querySelector(".task-container") as HTMLDivElement;
    taskContainer.appendChild(taskDiv);

    (document.getElementById("task-form") as HTMLFormElement).reset();
    toggleForm();
}

function editTask(taskDiv: HTMLDivElement, title: string, dueDate: string, assignee: string, comment: string) {
    (document.getElementById("task-title") as HTMLInputElement).value = title;
    (document.getElementById("task-due-date") as HTMLInputElement).value = dueDate;
    (document.getElementById("task-assignee") as HTMLInputElement).value = assignee;
    (document.getElementById("task-comment") as HTMLInputElement).value = comment;

    toggleForm();

    const taskForm = document.getElementById("task-form") as HTMLFormElement;
    taskForm.onsubmit = (event) => {
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

        const editButton = taskDiv.querySelector(".edit-btn") as HTMLButtonElement;
        editButton.addEventListener("click", () => editTask(taskDiv, newTitle, newDueDate, newAssignee, newComment));

        const deleteButton = taskDiv.querySelector(".delete-btn") as HTMLButtonElement;
        deleteButton.addEventListener("click", () => deleteTask(taskDiv));

            taskForm.reset();
        toggleForm();
    };
}

function deleteTask(taskDiv: HTMLDivElement) {
    taskDiv.remove();
}

const newTaskButton = document.querySelector(".edit-btn") as HTMLButtonElement;
newTaskButton.addEventListener("click", toggleForm);

const taskForm = document.getElementById("task-form") as HTMLFormElement;
taskForm.addEventListener("submit", addTask);
