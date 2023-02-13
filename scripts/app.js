// todos 
let data = [{
    "heading": "item1",
    "description": "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world",
    "date": "1/1/2023"
  },
  {
    "heading": "item2",
    "description": "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world",
    "date": "1/2/2023"
  },
  {
    "heading": "item3",
    "description": "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world",
    "date": "1/3/2023"
  },
  {
    "heading": "item4",
    "description": "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world",
    "date": "1/4/2023"
  },
  {
    "heading": "item5",
    "description": "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world",
    "date": "1/5/2023"
  }
]

// render todos 
function renderTodos() {
  data.map((element, index) => {
    document.getElementById('list').innerHTML += `
      <li>
        <div class="list-item">
          <button id="expand${index}" class="expand-btn" onclick="expandDescription(${index});">expand</button>
          <button id="collapse${index}" class="collapse-btn" onclick="collapseDescription(${index});">Collapse</button>
          <h2 class="todo-title">${element.heading}</h2>
          <p class="todo-description-truncated" id="list-item${index}-truncated">${(element.description).substring(0,50)}...</p>
          <p class="todo-description" id="list-item${index}">${element.description}</p>
          <div class="date">${element.date}</div>
        </div>
      </li>
    `;
  })
}

// show all content (description) of todo
function expandDescription(index) {
  // controller button
  document.getElementById(`expand${index}`).style.display = `none`
  document.getElementById(`collapse${index}`).style.display = `block`

  // description
  document.getElementById(`list-item${index}-truncated`).style.display = `none`
  document.getElementById(`list-item${index}`).style.display = `block`
}

// show some content (description) of todo
function collapseDescription(index) {
  // controller button
  document.getElementById(`expand${index}`).style.display = `block`
  document.getElementById(`collapse${index}`).style.display = `none`

  // description
  document.getElementById(`list-item${index}-truncated`).style.transition = `3s`
  document.getElementById(`list-item${index}-truncated`).style.display = `block`
  document.getElementById(`list-item${index}`).style.display = `none`
}