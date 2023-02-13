let toggleState = true;

// render todos 
function renderTodos() {
  todos.map((element, index) => {

    updateToggleState();
    document.getElementById('list').innerHTML += `
      <li>
        <div class="list-item" id="item${index}" onclick="toggleTodo(${index});">

          <h2 class="todo-title truncated" id="truncatedHeading${index}">${(element.heading).substring(0,30)}</h2>
          <h2 class="todo-title non-truncated" id="expandedHeading${index}">${element.heading}</h2>

          <p class="todo-description truncated" id="list-item${index}-truncated">${(element.description).substring(0,50)}...</p>
          <p class="todo-description non-truncated" id="list-item${index}">${element.description}</p>

          <div class="todo-date">${element.date}</div>
        </div>
      </li>
    `;
  })
}