const input=document.querySelector('.input-element');
const start=document.querySelector('.start-button');
let display_name=document.querySelector('.welcome-name');
let To_Do=document.querySelector('.header');
let To_Do2=document.querySelector('.h5');
const todoInput=document.querySelector('.Task-input');
const todoButton=document.querySelector('.add-button');
// const todoFilter=document.querySelector('.filter');

// event listener
start.addEventListener('click',(e)=>{
   let display=input.value;
   display_name.textContent=`Welcome, ${display}`;
   input.value=""
   input.style.display="none";
   start.style.display="none";
   To_Do.style.display='block';
   To_Do2.style.display='block';
})

//array to do list in div
const ToDo=[
  {
    name:'dinner',
    time:'10:59 PM'
  },
  {
    name:'sleep',
    time:'10:59 PM'
  }
];
renderList()
function renderList(){
  let ToDoHTML='';
  for(let i=0; i<ToDo.length;i++){
    let toDoObject=ToDo[i];
    const {name,time }=toDoObject;

    const html=`
      <div>${name}</div>
      <div>${time}</div>
      <button class="delete-button" onclick="
        ToDo.splice(${i},1); 
        renderList();
      ">Delete</button>`;
      
    ToDoHTML+=html;
}
document.querySelector('.list-container ').innerHTML=ToDoHTML;
}

//to push elemnt in array
function addTodo(){
  const name =todoInput.value;
  const timeInput=document.querySelector('.time')
  const time=timeInput.value;
  ToDo.push({
    name,
    time
  }
  );
  todoInput.value='';
  timeInput.value='';
  renderList();
}
