function addTask() {
    var task = document.getElementById('task').value;
    if (task !== '') {
        var taskList = document.getElementById('taskList');
        var listItem = document.createElement('li');
        listItem.innerHTML = task + '<button onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(listItem);
        document.getElementById('task').value = '';
    }
}

function removeTask(taskItem) {
    taskItem.parentNode.remove();
}
