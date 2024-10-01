const todos = JSON.parse(localStorage.getItem("todos")) || [];

const render = () => {
  const todoList = document.getElementById("todo-list");
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
  todoList.innerHTML = todosTemplate.join("");
  const elementos = document.querySelectorAll("#todo-list li ");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      elemento.parentNode.removeChild(elemento);
      todos.splice(i, 1);
      actualizatodos(todos);
      render();
    });
  });
};
const actualizatodos = (todos) => {
  const todostring = JSON.stringify(todos);
  localStorage.setItem("todos", todostring);
};
window.onload = () => {
  render();
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todotext = todo.value;
    todo.value = "";
    todos.push(todotext);
    actualizatodos(todos);
    render();
  };
};
