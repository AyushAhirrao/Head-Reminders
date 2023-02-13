function toggleTodo(index) {

    // get the list item div
    let todoItem = document.getElementById(`todo-item${index}`);

    // get the value of toggleState
    let toggleState = todoItem.getAttribute('toggleState');

    // typecase the toggleState to boolean
    if (toggleState === "true") {
        toggleState = true;
    } else {
        toggleState = false;
    }

    // collapse
    if (toggleState) {

        // heading
        document.getElementById(`expandedHeading${index}`).style.display = `none`
        document.getElementById(`truncatedHeading${index}`).style.display = `block`


        // description
        document.getElementById(`list-item${index}-truncated`).style.display = `block`
        document.getElementById(`list-item${index}`).style.display = `none`
    }
    // expand
    else {

        // heading
        document.getElementById(`expandedHeading${index}`).style.display = `block`
        document.getElementById(`truncatedHeading${index}`).style.display = `none`


        // description
        document.getElementById(`list-item${index}-truncated`).style.display = `none`
        document.getElementById(`list-item${index}`).style.display = `block`
    }

    // update the toggleState value
    todoItem.setAttribute('toggleState', !toggleState);

}

async function checkCheckBox(index) {

    // reToggle the toggleTodo
    toggleTodo(index);

    // get the checkbox
    let checkBox = document.getElementById(`checkbox${index}`)

    // if checkbox is checked
    if (checkBox.checked) {
        // get todoItem
        let todoItem = document.getElementById(`todo-item${index}`);

        // animation
        todoItem.style.animationName = 'shake';
        todoItem.style.animationDuration = '3s';

        // remove the todo after 800 milliseconds
        setTimeout(() => {
            todoItem.remove();
        }, 800);

    }
}