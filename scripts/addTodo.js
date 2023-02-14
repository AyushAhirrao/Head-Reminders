document.getElementById('add-todo').addEventListener('click', async () => {

    let main = document.querySelector('.main');
    main.style.filter = 'blur(5px)';
    main.style.pointerEvents = 'none';

    let addTodoContainer = document.querySelector("#add-todo-input-container");

    let container = document.querySelector('.container')
    container.style.alignItems = `center`;

    document.querySelector('#add-todo-input-container').style.display = 'flex';
});

document.getElementById('submit-todo-btn').addEventListener('click', async () => {

    let todoTitle = document.getElementById("add-todo-input-heading").value;
    let todoDesc = document.getElementById("add-todo-input-description").value;

    // create todo
    let todo = {
        "heading": todoTitle,
        "description": todoDesc,
        "date": getTodaysDate(),
        "completedDate": ""
    }

    // push todo to list 
    pendingTodos.push(todo);

    // update localStorage with new list
    updateLocalStorage();

    // reset main screen
    let main = document.querySelector('.main');
    main.style.filter = 'blur(0)';
    main.style.pointerEvents = 'all';

    let container = document.querySelector('.container')
    container.style.alignItems = `flex-start`;

    document.querySelector('#add-todo-input-container').style.display = 'none';

    // render new todos list
    renderTodos();
});