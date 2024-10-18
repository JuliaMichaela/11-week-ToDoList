function createTask () {
    const task = document.getElementById('task');
    const taskContent = task.textContent;

    const list = document.getElementById('contentList')
    const listItem = document.createElement('li');
    listItem.innerText = task.value;
    list.append(listItem);



    
    console.log (taskContent);
    
    console.log (result)
}
// console.log ()