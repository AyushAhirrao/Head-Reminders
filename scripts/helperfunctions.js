function togglePendingTodos(todoItem, index) {

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

function toggleCompletedTodos(todoItem, index) {

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
        document.getElementById(`completed-expandedHeading${index}`).style.display = `none`
        document.getElementById(`completed-truncatedHeading${index}`).style.display = `block`


        // description
        document.getElementById(`completed-list-item${index}-truncated`).style.display = `block`
        document.getElementById(`completed-list-item${index}`).style.display = `none`
    }
    // expand
    else {

        // heading
        document.getElementById(`completed-expandedHeading${index}`).style.display = `block`
        document.getElementById(`completed-truncatedHeading${index}`).style.display = `none`


        // description
        document.getElementById(`completed-list-item${index}-truncated`).style.display = `none`
        document.getElementById(`completed-list-item${index}`).style.display = `block`
    }

    // update the toggleState value
    todoItem.setAttribute('toggleState', !toggleState);

}

async function handleCheckBox(todoItem, index) {

    // reToggle the toggleTodo
    togglePendingTodos(todoItem, index);

    // get the checkbox
    let checkBox = document.getElementById(`checkbox${index}`)

    // if checkbox is checked
    if (checkBox.checked) {

        // get today's date
        let currentDate = new Date();

        // format date
        currentDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

        
        // add new property for the object
        pendingTodos[index].completedDate = currentDate;


        // move the todo to completedTodos 
        completedTodos.push(pendingTodos[index]);

        // remove the todo from pending todos list and move it to the completed todos
        pendingTodos.splice(index, 1);

        // get todoItem
        let todoItem = document.getElementById(`todo-item${index}`);

        // animation
        todoItem.style.animationName = 'shake';
        todoItem.style.animationDuration = '3s';

        // remove the todo after 800 milliseconds
        setTimeout(() => {
            renderTodos();
        }, 800);

    }
}