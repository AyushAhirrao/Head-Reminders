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

function render() {
data.map((element, index) => {
    document.getElementById('list').innerHTML += `
    <li>
        <div class="list-item">
            <button onclick="expandDescription(${index});">expand</button>
            <h2 class="todo-title">${element.heading}</h2>
            <p class="todo-description-truncated" id="list-item${index}-truncated">${(element.description).substring(0,50)}...</p>
            <p class="todo-description" id="list-item${index}">${element.description}</p>
            <div class="date">${element.date}</div>
        </div>
    </li>
    `;
})
}

window.addEventListener('load', () => {
render();
})

function expandDescription(index) {
document.getElementById(`list-item${index}-truncated`).style.display = `none`
document.getElementById(`list-item${index}`).style.display = `block`
}