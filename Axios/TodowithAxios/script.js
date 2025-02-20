function getTodos(){
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => displayTodos(res.data))
    .catch(err => console.log(err));
}

function updateTodo(id){
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        title: 'Updated todo',
        completed: true 
    })
    .then(() => alert('API record updated successfully!'))
    .catch(err => console.log(err));
}

function removeTodo(id){
    axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(() => alert('API record deleted successfully!'))
    .catch(err => console.log(err));
}

function addTodo() {
    axios
    .post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New todo',
        completed: false
    })
    .then(res => displayTodoItem(res.data))
    .catch(err => console.log(err));
}

function displayTodos(todos) {
    const ulTodo = document.getElementById('ul-todo');
    ulTodo.innerHTML = '';
    todos.forEach(todo => displayTodoItem(todo));
}

function displayTodoItem(todo) {
    const ulTodo = document.getElementById('ul-todo');
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-start';
    li.innerHTML = `
        <input type="text" class="form-control form-control-sm" value="${todo.title}" readonly />
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-danger" onclick="editTodo(this, ${todo.id})">Edit</button>
            <button type="button" class="btn btn-warning" onclick="deleteTodo(${todo.id})">Delete</button>
        </div>
    `;
    ulTodo.appendChild(li);
}

function editTodo(button, id) {
    const li = button.closest('li');
    const input = li.querySelector('input');
    
    if (button.textContent === 'Edit') {
        input.removeAttribute('readonly');
        input.focus();
        button.textContent = 'Save';
    } else {
        input.setAttribute('readonly', true);
        button.textContent = 'Edit';
        updateTodo(id);
    }
}

function deleteTodo(id) {
    removeTodo(id);
}

document.addEventListener('DOMContentLoaded', getTodos);

