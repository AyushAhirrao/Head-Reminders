// render todos 
function renderTodos() {
  todos.map((element, index) => {
    document.getElementById('list').innerHTML += `
      <li>
        <div class="list-item" id="todo-item${index}" toggleState="false" onclick="toggleTodo(${index});">

          <div class="checkBox">
            <input type="checkbox" id="checkbox${index}" onclick="checkCheckBox(${index});">
          </div>

          <h2 class="todo-title non-truncated" id="expandedHeading${index}">${element.heading}</h2>
          <h2 class="todo-title truncated" id="truncatedHeading${index}">${((element.heading).length > 25)?(element.heading).substring(0,25)+'...':(element.heading)}</h2>

          <p class="todo-description truncated" id="list-item${index}-truncated">${(element.description).length>50?(element.description).substring(0,50)+'...':(element.description)}</p>
          <p class="todo-description non-truncated" id="list-item${index}">${element.description}</p>

          <div class="todo-date">${element.date}</div>
        </div>
      </li>
    `;
  })
}
