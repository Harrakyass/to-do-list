const addTask = () => {
    const userInput = document.querySelector('.input-item').value.trim();
    if (userInput == '') {
        alert("Please add a valid task. task cannot be empty!");
        return;
    }
    const createdLi = document.createElement('li');
    createdLi.innerText = userInput;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    const completeButton = document.createElement('Button');
    completeButton.innerText = 'Completed';
    createdLi.appendChild(deleteButton);
    createdLi.appendChild(completeButton);
    const listContainer = document.getElementById('list-container');
    listContainer.appendChild(createdLi);
    taskCounter();

    completeButton.addEventListener('click', () => {
        createdLi.classList.toggle('completed');
        taskCounter();
    })
    deleteButton.addEventListener('click', () => {
        createdLi.parentNode.removeChild(createdLi);
        taskCounter();
    })
    document.querySelector('.input-item').value = '';
    document.querySelector('.input-item').focus();
}

const turnToNumber = (counter) => {
    return Number.parseInt(counter);
}
const taskCounter = () => {
    const allTasks = document.querySelectorAll('#list-container li');
    const completedTasks = document.querySelectorAll('#list-container li.completed');
    const completedCounter = document.getElementById('completed-counter');
    const uncompletedCounter = document.getElementById('uncompleted-counter');
    completedCounter.innerText = completedTasks.length;
    uncompletedCounter.innerText = allTasks.length - completedTasks.length;
}
