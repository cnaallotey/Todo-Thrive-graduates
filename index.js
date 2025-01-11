
let items = []

const addButton = document.getElementById('addButton')
const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')

function addTodo() {
  const todoText = todoInput.value.trim()
 if(todoText){
  items.push({
    id: items.length + 1,
    text: todoText,
    completed: false
  })
 }
 todoInput.value= ''
 renderTodos()
}

addButton.addEventListener('click', () => {
  addTodo()
})

function toggleTodo(id){
  items = items.map(item => {
    if(item.id === id){
      return {...item, completed: !item.completed}
    }
    return item
  })
  renderTodos()
}

function renderTodos(){
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

