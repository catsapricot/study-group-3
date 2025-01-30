function addTask() {
    const input = document.getElementById('tf-input')
    const inputValue = input.value;

    const task = document.createElement('li')
    task.textContent = inputValue;
    task.classList.add('list-item');
    task.id = new Date().valueOf().toString() + Math.random().toString(36).substring(2, 7);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', function() {
        editTask(task.id);
    })

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        deleteTask(task.id);
    })

    const taskContainer = document.getElementById('task-container');

    taskContainer.appendChild(task);
    task.appendChild(editButton);
    task.appendChild(deleteButton);
    input.value = '';
}

function editTask(id) {
    const input = document.getElementById('tf-input');
    const taskButton = document.querySelector('.button');
    const task = document.getElementById(id);

    input.value = task.firstChild.textContent.trim();
    input.placeholder = "Edit a task";
    taskButton.textContent = "Edit";

    taskButton.onclick = function() {
        task.firstChild.textContent = input.value;
        input.value = '';
        input.placeholder = "Enter a task";
        taskButton.textContent = "Add Task";
        taskButton.onclick = addTask;
    };
}

function deleteTask(id) {
    const task = document.getElementById(id);
    task.remove();
}