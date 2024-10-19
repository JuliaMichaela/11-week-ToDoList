function createTask () {
    const task = document.getElementById('task');
    const list = document.getElementById('contentList')
    const listItem = document.createElement('li');
    listItem.innerText = task.value;
    list.append(listItem);
    task.value = '';
}

function checkTask (){


    
}
