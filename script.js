function createTask () {
    const task = document.getElementById('task');
    const list = document.getElementById('contentList')
    const listItem = document.createElement('li');
    listItem.textContent = task.value;
    list.append(listItem);
    task.value = '';
}

function checkTask (event){
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done'); 
    }
}

const btn = document.querySelector ('#btn');
btn.addEventListener('click', createTask );

const element = document.querySelector ('ul');
element.addEventListener ('click', checkTask);
