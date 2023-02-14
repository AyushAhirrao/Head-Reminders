
// load resources
window.addEventListener('load', async () => {
    
    // get todos from local storage
    pendingTodos = await JSON.parse(localStorage.getItem('pending-todos'));
    completedTodos = await JSON.parse(localStorage.getItem('completed-todos'));

    // render todos
    renderTodos();
});