//Define UI Vars

const form = document.querySelector("#task-form");
const taskList= document.querySelector('.collection');
const clearBtn=document.querySelector('clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',closeTask);

}

//Function to add task
function addTask(e){
    if(taskInput.value==='')
        alert('add a task');

    const li = document.createElement('li');

    li.className='collection-item';
    li.innerText=taskInput.value;
    taskList.appendChild(li);
    const x=document.createElement('a');
    x.className="delete-item secondary-content"
    x.setAttribute('href',"#");
    const y = document.createElement('i');
    y.className='fa fa-remove';
    x.appendChild(y);
    li.appendChild(x);
    e.preventDefault();

    //clear input
    taskInput.value="";
}

function closeTask(e){
    if(e.target.className=='fa fa-remove')
        e.target.parentNode.parentNode.remove();
}
