document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Fetch tasks from the backend
    fetch('http://localhost:3000/tasks')
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                addTaskToList(task);
            });
        });

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            fetch('http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: taskText })
            })
            .then(response => response.json())
            .then(task => {
                addTaskToList(task);
                newTaskInput.value = '';
            });
        }
    }

    function addTaskToList(task) {
        const li = document.createElement('li');
        li.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
});
