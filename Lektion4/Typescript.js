function toggleForm() {
    const form = document.getElementById("task-form");
    form.classList.toggle("hidden");
}

function addTask(event) {
    event.preventDefault();
    const title = document.getElementById("task-title").value;
    const dueDate = document.getElementById("task-due-date").value;
    const assignee = document.getElementById("task-assignee").value;
    const comment = document.getElementById("task-comment").value;
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
    const editButton = taskDiv.querySelector(".edit-btn");
    editButton.addEventListener("click", () => editTask(taskDiv, title, dueDate, assignee, comment));
    const deleteButton = taskDiv.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => deleteTask(taskDiv));
    const taskContainer = document.querySelector(".task-container");
    taskContainer.appendChild(taskDiv);
    document.getElementById("task-form").reset();
    toggleForm();
}
function editTask(taskDiv, title, dueDate, assignee, comment) {
    document.getElementById("task-title").value = title;
    document.getElementById("task-due-date").value = dueDate;
    document.getElementById("task-assignee").value = assignee;
    document.getElementById("task-comment").value = comment;
    toggleForm();
    const taskForm = document.getElementById("task-form");
    taskForm.onsubmit = (event) => {
        event.preventDefault();
        const newTitle = document.getElementById("task-title").value;
        const newDueDate = document.getElementById("task-due-date").value;
        const newAssignee = document.getElementById("task-assignee").value;
        const newComment = document.getElementById("task-comment").value;
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
        const editButton = taskDiv.querySelector(".edit-btn");
        editButton.addEventListener("click", () => editTask(taskDiv, newTitle, newDueDate, newAssignee, newComment));
        const deleteButton = taskDiv.querySelector(".delete-btn");
        deleteButton.addEventListener("click", () => deleteTask(taskDiv));
        taskForm.reset();
        toggleForm();
    };
}
function deleteTask(taskDiv) {
    taskDiv.remove();
}
const newTaskButton = document.querySelector(".edit-btn");
newTaskButton.addEventListener("click", toggleForm);
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", addTask);
//# sourceMappingURL=Typescript.js.map