function toggleTodo(index) {
    // collapse
    if (toggleState) {

        // heading
        document.getElementById(`expandedHeading${index}`).style.display = `block`
        document.getElementById(`truncatedHeading${index}`).style.display = `none`


        // description
        document.getElementById(`list-item${index}-truncated`).style.display = `block`
        document.getElementById(`list-item${index}`).style.display = `none`
    }
    // expand
    else {

        // heading
        document.getElementById(`expandedHeading${index}`).style.display = `none`
        document.getElementById(`truncatedHeading${index}`).style.display = `block`


        // description
        document.getElementById(`list-item${index}-truncated`).style.display = `none`
        document.getElementById(`list-item${index}`).style.display = `block`
    }

    updateToggleState();
}

function updateToggleState() {
    toggleState = !toggleState;
}