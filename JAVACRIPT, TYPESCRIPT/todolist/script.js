const button = document.querySelector('.input-container__button');
const input = document.querySelector('.input-container__input');
const todoList = document.querySelector('.todo-list');
const warning = document.createElement('p');

button.addEventListener('click', () => {
    warning.innerText = '';
    warning.display = 'none';
    if (input.value.trim() === '') {
        warning.innerText = 'Please enter a task';
        warning.classList.add('todo-list__warning');
        todoList.insertBefore(warning, todoList.firstChild);
        return;
    }
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.classList.add('todo-list__item');
    li.innerText = input.value.trim();
    todoList.appendChild(li);
    input.value = '';
    li.appendChild(deleteButton);
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('todo-list__delete-button');

    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
    });
});
