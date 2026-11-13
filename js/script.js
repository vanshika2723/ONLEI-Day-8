
// ========================================
// TASK 3: DOM MANIPULATION
// ========================================

const heading = document.getElementById("mainHeading");

const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const resetBtn = document.getElementById("resetBtn");

// Store original heading
const originalText = "Welcome to JavaScript!";
const originalColor = "#514b75";

// Change Heading Text
changeTextBtn.addEventListener("click", function () {
    heading.textContent = "Welcome to ONLEI Technologies!";
});

// Change Heading Color
changeColorBtn.addEventListener("click", function () {
    heading.style.color = "#e07835";
});

// Reset Heading
resetBtn.addEventListener("click", function () {
    heading.textContent = originalText;
    heading.style.color = originalColor;
});


// ========================================
// TASK 4: CHARACTER COUNTER
// ========================================

const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", function () {
    charCount.textContent = messageInput.value.length;
});


// ========================================
// TASK 5 & 6: INTERACTIVE TO-DO LIST
// ========================================

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const emptyMessage = document.getElementById("emptyMessage");

// Add Task
taskForm.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create Done Button
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.type = "button";
    doneButton.className = "done-btn";

    // Mark Task as Completed
    doneButton.addEventListener("click", function () {
        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            doneButton.textContent = "Undo";
        } else {
            doneButton.textContent = "Done";
        }

        updateTaskCount();
    });

    // Create Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";

    // Delete Task
    deleteButton.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    // Add elements to list item
    li.append(span, doneButton, deleteButton);

    // Add task to webpage
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    taskInput.focus();

    // Update task count
    updateTaskCount();

});


// ========================================
// TASK 6: UPDATE TOTAL TASK COUNT
// ========================================

function updateTaskCount() {

    const tasks = taskList.querySelectorAll("li");

    const completed = taskList.querySelectorAll("li.completed");

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = completed.length;

    // Show or hide empty message
    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// Initial task count
updateTaskCount();
