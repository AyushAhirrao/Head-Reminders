// render all todos 
async function renderTodos() {

  // handle empty todos
  if (pendingTodos == null || pendingTodos == [] || pendingTodos == undefined || pendingTodos == '') {
    document.getElementById('pending-todos').innerHTML = `<div class="empty-todos flex-center"><i>No Todos</i></div>`
  } 
  // handle pending todos
  else {
    // render pending todos
    renderPendingTodos();
  }

  // handle empty todos
  if (completedTodos == null || completedTodos == [] || completedTodos == undefined || completedTodos == '') {
    document.getElementById('completed-todos').innerHTML = `<div class="empty-todos flex-center"><i>No Todos</i></div>`
  }
  // handle completed todos
  else {
    // render completed todos
    renderCompletedTodos();
  }
}

// for rendering pending todos
function renderPendingTodos() {

  document.getElementById('pending-todos').innerHTML = `
  ${
    pendingTodos.map((element, index) => {
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

            <div class="todo-date"><i>${element.date}</i></div>
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

            <div class="todo-date"><i>${element.date} - ${element.completedDate}</i></div>
          </div>
        </li> 
      `);
    }).join('')
  }`;
}