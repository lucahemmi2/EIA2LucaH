"use strict";
// Typdefinitionen für eventuelle Elemente
const form = document.getElementById("task-form");
const taskContainer = document.querySelector(".task-container");
const newTaskButton = document.querySelector(".edit-btn");
const loadingIndicator = document.getElementById("loading-indicator");
// Sichtbarkeit des Formulars umschalten
function toggleForm() {
    if (form) {
        form.classList.toggle("hidden");
    }
}
// Aufgabe hinzufügen und an Server senden
async function addTask(event) {
    event.preventDefault();
    // Eingabewerte erfassen
    const title = document.getElementById("task-title").value;
    const dueDate = document.getElementById("task-due-date").value;
    const assignee = document.getElementById("task-assignee").value;
    const comment = document.getElementById("task-comment").value;
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
    const editButton = taskDiv.querySelector(".edit-btn");
    editButton.addEventListener("click", () => editTask(taskDiv, title, dueDate, assignee, comment));
    const deleteButton = taskDiv.querySelector(".delete-btn");
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
    }
    catch (error) {
        console.error("Fehler beim Senden der Aufgabe:", error);
    }
    finally {
        showLoadingIndicator(false);
    }
}
// Bearbeiten einer vorhandenen Aufgabe
function editTask(taskDiv, title, dueDate, assignee, comment) {
    document.getElementById("task-title").value = title;
    document.getElementById("task-due-date").value = dueDate;
    document.getElementById("task-assignee").value = assignee;
    document.getElementById("task-comment").value = comment;
    toggleForm();
    form.onsubmit = (event) => {
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
        // Event-Listener wieder hinzufügen
        const editButton = taskDiv.querySelector(".edit-btn");
        editButton.addEventListener("click", () => editTask(taskDiv, newTitle, newDueDate, newAssignee, newComment));
        const deleteButton = taskDiv.querySelector(".delete-btn");
        deleteButton.addEventListener("click", () => deleteTask(taskDiv));
        form.reset();
        toggleForm();
    };
}
// Löschen einer Aufgabe
function deleteTask(taskDiv) {
    taskDiv.remove();
}
// Laden der Startdaten aus JSON-Datei
async function loadInitialData() {
    showLoadingIndicator(true);
    try {
        const response = await fetch("tasks.json");
        const tasks = await response.json();
        tasks.forEach((task) => {
            addTaskToUI(task.title, task.dueDate, task.assignee, task.comment);
        });
    }
    catch (error) {
        console.error("Fehler beim Laden der Startdaten:", error);
    }
    finally {
        showLoadingIndicator(false);
    }
}
// Aufgabe zur Benutzeroberfläche hinzufügen
function addTaskToUI(title, dueDate, assignee, comment) {
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
    taskContainer.appendChild(taskDiv);
}
// Anzeige für den Ladeprozess ein- und ausschalten
function showLoadingIndicator(visible) {
    if (loadingIndicator) {
        loadingIndicator.classList.toggle("hidden", !visible);
    }
}
// Event-Listener initialisieren
newTaskButton.addEventListener("click", toggleForm);
form.addEventListener("submit", addTask);
document.addEventListener("DOMContentLoaded", loadInitialData);
//# sourceMappingURL=Typescript.js.map