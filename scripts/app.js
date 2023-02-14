// render all todos 
function renderTodos() {

  // render pending todos
  renderPendingTodos();

  // completed todos
  renderCompletedTodos();
}

// for rendering pending todos
function renderPendingTodos() {

  document.getElementById('pending-todos').innerHTML = `
  ${
    todos.map((element, index) => {
      return (`
        <li>
          <div class="list-item" id="todo-item${index}" toggleState="false" onclick="togglePendingTodos(this, ${index});">

            <div class="checkBox">
              <input type="checkbox" id="checkbox${index}" onclick="handleCheckBox(document.getElementById('todo-item${index}'), ${index});">
            </div>

            <h1 class="todo-title non-truncated" id="expandedHeading${index}">${element.heading}</h1>
            <h1 class="todo-title truncated" id="truncatedHeading${index}">${((element.heading).length > 25)?(element.heading).substring(0,25)+'...':(element.heading)}</h1>

            <p class="todo-description truncated" id="list-item${index}-truncated">${(element.description).length>50?(element.description).substring(0,50)+'...':(element.description)}</p>
            <p class="todo-description non-truncated" id="list-item${index}">${element.description}</p>

            <div class="todo-date">${element.date}</div>
          </div>
        </li> 
      `);
    }).join('')
  }`;
}

// for rendering completed todos
function renderCompletedTodos() {

  document.getElementById('completed-todos').innerHTML = `
  ${
    completedTodos.map((element, index) => {
      return (`
        <li>
          <div class="list-item" id="completed-todo-item${index}" toggleState="false" onclick="toggleCompletedTodos(this, ${index});">

            <h1 class="todo-title truncated" id="completed-truncatedHeading${index}">${((element.heading).length > 25)?(element.heading).substring(0,25)+'...':(element.heading)}</h1>
            <h1 class="todo-title non-truncated" id="completed-expandedHeading${index}">${element.heading}</h1>

            <p class="todo-description truncated" id="completed-list-item${index}-truncated">${(element.description).length>50?(element.description).substring(0,50)+'...':(element.description)}</p>
            <p class="todo-description non-truncated" id="completed-list-item${index}">${element.description}</p>

            <div class="todo-date">${element.date}</div>
          </div>
        </li> 
      `);
    }).join('')
  }`;
}