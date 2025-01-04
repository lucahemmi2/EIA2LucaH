"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Typdefinitionen für eventuelle Elemente
const form = document.getElementById("task-form");
const taskContainer = document.querySelector(".task-container");
const newTaskButton = document.querySelector(".edit-btn");
const loadingIndicator = document.getElementById("loading-indicator");
// Zentrale Funktion für CRUD-Operationen
function executeQuery(command_1) {
    return __awaiter(this, arguments, void 0, function* (command, data = {}) {
        const url = "https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/lhe48151/mingidb.php";
        const query = new URLSearchParams();
        query.set("command", command);
        query.set("collection", "Tasks");
        query.set("data", JSON.stringify(data));
        try {
            const response = yield fetch(`${url}?${query.toString()}`, { method: "GET" });
            const result = yield response.json();
            console.log(`MingiDB ${command} Response:`, result);
            return result;
        }
        catch (error) {
            console.error(`MingiDB ${command} Error:`, error);
        }
    });
}
// Sichtbarkeit des Formulars umschalten
function toggleForm() {
    if (form) {
        form.classList.toggle("hidden");
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
    taskContainer.appendChild(taskDiv);
    const editButton = taskDiv.querySelector(".edit-btn");
    editButton.addEventListener("click", () => editTask(taskDiv, title, dueDate, assignee, comment));
    const deleteButton = taskDiv.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => deleteTask(taskDiv));
}
// Aufgabe hinzufügen (Create)
function addTask(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const title = document.getElementById("task-title").value;
        const dueDate = document.getElementById("task-due-date").value;
        const assignee = document.getElementById("task-assignee").value;
        const comment = document.getElementById("task-comment").value;
        yield executeQuery("insert", { title, dueDate, assignee, comment });
        addTaskToUI(title, dueDate, assignee, comment);
        form.reset();
        toggleForm();
    });
}
// Aufgaben aus der Datenbank laden (Read)
function loadTasksFromDB() {
    return __awaiter(this, void 0, void 0, function* () {
        showLoadingIndicator(true);
        const tasks = yield executeQuery("find", {});
        if (tasks) {
            tasks.forEach((task) => addTaskToUI(task.title, task.dueDate, task.assignee, task.comment));
        }
        showLoadingIndicator(false);
    });
}
// Aufgabe bearbeiten (Update)
function editTask(taskDiv, title, dueDate, assignee, comment) {
    document.getElementById("task-title").value = title;
    document.getElementById("task-due-date").value = dueDate;
    document.getElementById("task-assignee").value = assignee;
    document.getElementById("task-comment").value = comment;
    toggleForm();
    form.onsubmit = (event) => __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const newTitle = document.getElementById("task-title").value;
        const newDueDate = document.getElementById("task-due-date").value;
        const newAssignee = document.getElementById("task-assignee").value;
        const newComment = document.getElementById("task-comment").value;
        yield executeQuery("update", { title: newTitle, dueDate: newDueDate, assignee: newAssignee, comment: newComment });
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
        form.reset();
        toggleForm();
    });
}
// Aufgabe löschen (Delete)
function deleteTask(taskDiv) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield executeQuery("delete", { title: (_a = taskDiv.querySelector("h2")) === null || _a === void 0 ? void 0 : _a.textContent });
        taskDiv.remove();
    });
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
document.addEventListener("DOMContentLoaded", loadTasksFromDB);
//# sourceMappingURL=Typescript.js.map