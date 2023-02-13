function toggleTodo(index) {
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

    updateToggleState();
}

function updateToggleState() {
    toggleState = !toggleState;
}


async function checkCheckBox(index) {

    // call toggleTodo again to not to toggle the description
    toggleTodo(index);

    // get the checkbox
    let checkBox = document.getElementById(`checkbox${index}`)

    // if checkbox is checked
    if (checkBox.checked) {
        let todoItem = document.getElementById(`todo-item${index}`);
        todoItem.style.animationName = 'shake';
        todoItem.style.animationDuration = '3s';

        setTimeout(() => {
            todoItem.remove();
        }, 800);

    }
}