let isClicked = false;
const addTask = () => {
    const userInput = document.querySelector('.input-item').value;
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
    

    completeButton.addEventListener('click', () => {
        isClicked = true;
        createdLi.classList.toggle('completed');
        taskCounter();
    })
    deleteButton.addEventListener('click', () => {
        createdLi.parentNode.removeChild(createdLi);
        taskCounter();
    })
    clearInterval(userInput)
}

const turnToNumber = (counter) => {
    return Number.parseInt(counter);
}
const taskCounter = () => {
    const completedCounter = document.getElementById('completed-counter');
    const uncompletedCounter = document.getElementById('uncompleted-counter');
    let completedCounterText = completedCounter.innerText;
    let uncompletedCounterText = uncompletedCounter.innerText;
    turnToNumber(completedCounterText);
    turnToNumber(uncompletedCounterText);
    if (isClicked) {
        completedCounterText++;
        if (uncompletedCounterText == 0){
            uncompletedCounterText;
        } else {
            uncompletedCounterText--;
        }
        
    } else {
        uncompletedCounterText++;
    }
    completedCounter.innerText = completedCounterText;
    uncompletedCounter.innerText = uncompletedCounterText;
}
