let todoArray = [];
//textinput
const text = document.getElementById("text");
//button to add text
const addTaskButton = document.getElementById("add-task-btn");
//button to save task
const saveTaskButton = document.getElementById("save-todo-btn");

const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");



addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo)
    }

    if (todo = '') {
        alert('Input is empty')
        return;
    }
  
  todoArray.push(todo.value);
  todo.value = '';
  localStorage.setItem(todoArray, todo);
  JSON.stringify(todoArray);
  displayTodo();
});

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
          <p class='w-full text-white font-bold'>${list}</p>
          <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
          <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
       </div>`;
  });
  listBox.innerHTML = htmlCode;
}

function deleteTodo(ind) {
  // call the todo and let it equal localstorage.getitem("todo")
  todo = localStorage.getItem("todo");
  // assign the todoArray equal to JSON.parse(todo)
  todoArray = JSON.parse(todo);
  // use the todoArray and use the splice method on the ind and pass in 1 as well.
  
  // set the todo in local storage and use the JSON.stringify(todoArray)
  // call the display todo method
}

function edit(ind) {
  // set the saveInd.value equal to the ind
  // call the todo and let it equal localstorage.getitem("todo")
  // assign the todoArray equal to JSON.parse(todo)
  // assign the text.value to the array and get the index [ind].
  // set the addTaskButton display to none
  // set the saveTaskButton display to block
}

// this is the challenge for this project
// you'll follow a similar pattern above and do the following different:
// 1. let id be the same as your saveInd.value
// 2. switch the add and save displays to block and none respectively.
// 3. set text value to empty
// 4. and use the localstorage method setItem, pass in todo and stringify the array.
// 5. display todo method called.
saveTaskButton.addEventListener("click", () => {});