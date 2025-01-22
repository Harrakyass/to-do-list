// Set focus on the input field initially
document.querySelector('.input-item').focus();

// Function to add a new task
const addTask = () => {

    // Get the trimmed value of the user input
    const userInput = document.querySelector('.input-item').value.trim();

    // If the input is empty, show an alert and focus the input again
    if (userInput == '') {
        alert("Please add a valid task. task cannot be empty!");
        document.querySelector('.input-item').focus();
        return;
    }

    // Create a new list item <li> for the task
    const createdLi = document.createElement('li');
    createdLi.innerText = userInput;

    // Create the delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn')
    deleteButton.innerText = 'Delete';

     // Create the complete button for the task
    const completeButton = document.createElement('Button');
    completeButton.classList.add('completed-btn');
    completeButton.innerText = 'Completed';

     // Append the buttons to the task <li>
    createdLi.appendChild(deleteButton);
    createdLi.appendChild(completeButton);

    // Get the list container and append the new task
    const listContainer = document.getElementById('list-container');
    listContainer.appendChild(createdLi);

    // Update the task counter
    taskCounter();

    // Add event listener to mark the task as completed
    completeButton.addEventListener('click', () => {
        createdLi.classList.toggle('completed');
        taskCounter();
    })

    // Add event listener to delete the task
    deleteButton.addEventListener('click', () => {
        createdLi.parentNode.removeChild(createdLi);
        taskCounter();
    });

     // Clear the input field and focus on it for the next task
    document.querySelector('.input-item').value = '';
    document.querySelector('.input-item').focus();
}

// Function to convert the counter value to an integer (Can't remember where I needed it)
const turnToNumber = (counter) => {
    return Number.parseInt(counter);  // Parse the counter to an integer
}

// Function to update the task counters (completed vs. uncompleted)
const taskCounter = () => {
    const allTasks = document.querySelectorAll('#list-container li');  // All tasks
    const completedTasks = document.querySelectorAll('#list-container li.completed');  // Completed tasks

    // Get the elements to display the counters
    const completedCounter = document.getElementById('completed-counter');
    const uncompletedCounter = document.getElementById('uncompleted-counter');

     // Update the displayed counter for completed and uncompleted tasks
    completedCounter.innerText = completedTasks.length;
    uncompletedCounter.innerText = allTasks.length - completedTasks.length;
}
