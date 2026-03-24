let tasks = JSON.parse(localStorage.getItem("studyTasks")) || [];

function save(){
localStorage.setItem("studyTasks", JSON.stringify(tasks));
}

function render(){

const list=document.getElementById("taskList");
list.innerHTML="";

tasks.forEach((task,i)=>{

list.innerHTML+=`

<div class="task ${task.done ? "done":""}">

<div onclick="toggle(${i})">
${task.text}
</div>

<div class="progress ${task.priority}"></div>

<button onclick="removeTask(${i})">Delete</button>

</div>

`;

});

save();

}

function addTask(){

const input=document.getElementById("taskInput");

const priority=document.getElementById("priority");

if(!input.value) return;

tasks.push({
text:input.value,
priority:priority.value,
done:false
});

input.value="";

render();

}

function toggle(i){

tasks[i].done=!tasks[i].done;

render();

}

function removeTask(i){

tasks.splice(i,1);

render();

}

render();