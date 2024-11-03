let items = []

const addButton = document.getElementById('addButton')
const todoInput = document.getElementById('todoInput')

function addTodo(){
    const todoText = todoInput.value.trim()
     if(todoText === '')return
     items.push({
        id: Date.now(),
        text: todoText,
        completed: false
     })
    todoInput.value = ''
    console.log(items)
    rederTodos()
}

function rederTodos(){
    const todoList = document.getElementById('todoList')
    todoList.innerHTML = ''

    items.forEach(item => {
        const todoItem = document.createElement('div')
        todoItem.className = `todo-item ${item.completed ? 'completed' : ''}`

        todoItem.innerHTML = `
           <input type="checkbox" 
                           ${item.completed ? 'checked' : ''} 
                           onchange="toggleTodo(${item.id})">
                    <span class="todo-text">${item.text}</span>
                    <button class="delete-btn" onclick="deleteTodo(${item.id})">Delete</button>
        `

        todoList.appendChild(todoItem)
    })
}

function toggleTodo(id){
    items = items.map(item => {
        if(item.id === id){
            return {...item, completed: !item.completed}
        }
        return item
    })
    rederTodos()
}

addButton.addEventListener('click', addTodo)

