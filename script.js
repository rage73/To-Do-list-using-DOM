let inpBox = document.getElementById('inpBox');
let btnAdd = document.getElementById('btnAdd');
let ulTasks = document.getElementById('ulTasks');

btnAdd.onclick = function() {
    let liTask = document.createElement('li');

    let spnTask = document.createElement('span');
    spnTask.innerText = inpBox.value;
    
    let btnX = document.createElement('button');
    btnX.innerText = "X"; 
    btnX.onclick = function(event) {
        event.target.parentElement.remove();
    }
    
    let btnUp = document.createElement('button');
    btnUp.innerText = "↑"; 
    btnUp.onclick = function(event) {
        if(event.target.parentElement.previousElementSibling == null) {
            console.error("No Element Above!");
            return;
        }
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement,
            event.target.parentElement.previousElementSibling
        );
    }

    let btnDown = document.createElement('button');
    btnDown.innerText = "↓"; 
    btnDown.onclick = function(event) {
        if(event.target.parentElement.previousElementSibling == null) {
            console.error("No Element Below!");
            return;
        }
        event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement.nextElementSibling,
            event.target.parentElement
        );
    }

    liTask.appendChild(btnX);
    liTask.appendChild(btnUp);
    liTask.appendChild(btnDown);
    liTask.appendChild(spnTask);

    ulTasks.appendChild(liTask);
}