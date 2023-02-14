document.getElementById('clear-completed-todos-btn').addEventListener("click", () => {
    // clear completed todos list
    completedTodos = [];

    // update list to localStorage
    updateLocalStorage();

    // render todos
    renderTodos();
});