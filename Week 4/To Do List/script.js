// Input Element
const todo = document.querySelector('.todo-input');
// Add Button Element
const addBtn = document.querySelector('.add-btn');
// To Do List parent Element
const listParent = document.querySelector('ul');
// Warning Element
const warn = document.createElement('p');
warn.style.color = 'red';
warn.setAttribute('class', 'ff-secondary fs-5 warn');
const warnText = document.createTextNode('You must write something!');
warn.appendChild(warnText);

// Run function if add button clicked
addBtn.addEventListener('click',() => {
    // Check input value
    if (todo.value != "") {
        // Delete warning
        warn.remove();

        // Create new list
        const li = document.createElement('li');
        let doItem = document.createTextNode(todo.value);
        li.appendChild(doItem);

        // Create Close Button
        const closeBtn = document.createElement('span');
        closeBtn.style.cursor = 'pointer';
        closeBtn.setAttribute('class','ff-primary close-btn')
        const closeText = document.createTextNode('x');
        closeBtn.appendChild(closeText);

        // Enter close button to list item
        li.setAttribute('class','d-flex justify-between w-100 px-2');
        li.appendChild(closeBtn);

        // Enter new list to list parent
        listParent.parentElement.classList.add('active');
        listParent.appendChild(li);

        // Empty input element
        todo.value = '';

        // Remove list item when close button clicked
        let close = document.getElementsByClassName('close-btn');
        for(let i = 0;i < close.length;i++) {
            close[i].addEventListener("click", function() {
                this.parentElement.remove();
            })
        }

    } else { // Show warning if input value empty
        listParent.parentElement.before(warn);
    }
})