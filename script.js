const input = document.querySelector('input');
const button = document.querySelector('button');
const container = document.querySelector('.wrapperList');

button.addEventListener ('click', createTask)

function createTask () {
    const li = document.createElement('li')
    li.textContent = input.value
    container.appendChild(li)
    input.value = ''
}

const list = document.querySelector ('ul');

list.addEventListener ('click', checkTask)

function checkTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
}



