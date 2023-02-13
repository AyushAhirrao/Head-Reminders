// todos
let todos = "";

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

localStorage.setItem('todos', JSON.stringify(data));

// render todos
window.addEventListener('load', async () => {
    // get todos from local storage
    todos = await JSON.parse(localStorage.getItem('todos'));

    // render todos
    renderTodos();
});