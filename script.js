
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskBtn.addEventListener("click", function() {

    const taskText = taskInput.value.trim();

    // Check empty input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark task as completed or incomplete
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add Delete button to the task
    li.appendChild(deleteBtn);

    // Delete task
    deleteBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        li.remove();
    });

    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});
