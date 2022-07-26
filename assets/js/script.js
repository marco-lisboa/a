const form = document.getElementById("form");
const list = document.getElementById("list");

form.onsubmit = function (e) {
 e.preventDefault();
 const input = document.getElementById("input");
 adicionar(input.value);
 form.reset();
}

function adicionar(description) {
  const taskContainer = document.createElement("div");
  const newTask = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskDescriptionNode = document.createTextNode(description)

  newTask.setAttribute('type', 'checkbox');
  newTask.setAttribute('name', description);
  newTask.setAttribute('id', description);

  taskLabel.setAttribute('for', description);
  taskLabel.setAttribute('style', 'font-weight: 600');
  taskLabel.appendChild(taskDescriptionNode);

  taskContainer.classList.add('item');
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(taskLabel);

  list.appendChild(taskContainer);

  console.log(taskLabel);
}
