//Define UI Vars

const form = document.querySelector("#task-form");
const taskList= document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',closeTask);
    clearBtn.addEventListener('click',clearAllTasks);
    filter.addEventListener('keyup',filterTasks);
}

//Function to add task
function addTask(e){
    if(taskInput.value==='')
    {
        alert('add a task');
        return;
    }
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
    {
        if(confirm('Are you sure?')){
            e.target.parentNode.parentNode.remove();
        }

    }
        
}

function clearAllTasks(e){
    const collection=document.querySelectorAll('.collection-item');
        collection.forEach(function(e){
             e.remove();
        })
}

function filterTasks(e){
    const search_value=e.target.value;
    const collection=document.querySelectorAll('.collection-item');
    collection.forEach(function(current){
        if(current.textContent.indexOf(search_value)!=-1)
        {
            current.style.display='block';
        }
        else
        {
            current.style.display='none';
        }
    })
}