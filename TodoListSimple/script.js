const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");

form.addEventListener("submit" , function(event) {
    event.preventDefault();

    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
})