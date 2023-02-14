// load resources
window.addEventListener('load', async () => {

    // get pending todos from localStorage 
    pendingTodos = await JSON.parse(localStorage.getItem('pending-todos'));

    // get completed todos from localStorage 
    completedTodos = await JSON.parse(localStorage.getItem('completed-todos'));

    // handle empty todos
    if (pendingTodos === null) {
        pendingTodos = [];
    }
    if (completedTodos === null) {
        completedTodos = [];
    }
    
    // render todos
    renderTodos();

});