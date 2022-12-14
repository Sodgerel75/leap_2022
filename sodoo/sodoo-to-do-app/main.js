let now = new Date;
document.getElementById(myTimer.innerHTML = 'Он сар өдөр' + ' ' + now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay())


let task = document.getElementById('list');
console.log(task.value)

let toDoArr = [];

function addTask() {
    // document.getElementById('taskList').innerHTML = task.value + 'delete';
    let p = document.createElement('p')
    p.id = toDoArr.length + 1
    p.style = "col-auto"

    // p.innerHTML = task.value + ' <button>edit</button>' + ' <button>done</button>' + ' <button id="del-btn">del</button>';
    p.innerHTML = `
    <input value=${task.value} disabled> 
    <button  class="btn btn-warning"><i class="bi bi-pencil"></i></button> 
    <button  class="btn btn-success"><i class="bi bi-check-circle"></i></button>  
    <button id="del-btn-${toDoArr.length + 1} " onclick="delP()" class="btn btn-danger"><i class="bi bi-trash"></i></button>
    `;
    toDoArr.push(task.value)
    console.log(toDoArr);

    document.getElementById('container').appendChild(p);


    document.getElementById('taskNum').innerHTML = `${toDoArr.length} task uldlee`

    // const element = document.getElementById("container");
    // element.appendChild(listAdded);
}

let button = document.getElementById('add');

button.addEventListener('click', addTask);




// delete function

// let delButton = document.getElementById('del-btn-1');

// delButton.addEventListener('click', delP);


function delP() {
    console.log('deleted');
    // const element = document.getElementById('1');
    console.log(toDoArr.length);
    document.getElementById('1').remove();
    // document.getElementById(`${toDoArr.length}`).remove();
    // element.removeChild(list.firstElementChild);
}

