// Run after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Select Form (id = create-task-form)
  const form = document.getElementById('create-task-form');

  // Add event listener to form
  form.addEventListener('submit', (event) => {
    // Add preventDefault()
    event.preventDefault();

    // ----- Step 3: Handle form data -----
    // Using event, gather data into an object
    const formData = new FormData(event.target);

    // Use the name="new-task-description" to get the value
    const task = (formData.get('new-task-description') || '').trim();
    if (!task) return; // guard against empty

    // Create a new function called buildToDo() and call it.
    // Pass in the saved task.
    buildToDo(task);

    // optional: clear the form
    event.target.reset();
  });
});

// ----- Step 4: Add item to list and display -----
function buildToDo(taskText) {
  // Task list is under the id of task (some templates use "tasks")
  const taskList =
    document.getElementById('task') || document.getElementById('tasks');

  // Create a new li element
  const li = document.createElement('li');

  // Add the task as the textContent
  li.textContent = taskText;

  // Append the li element to the task list
  taskList.appendChild(li);
} 