// Simple in-memory task list
let tasks = [];
let nextId = 1;

function getTasks() {
  return tasks;
}

function reset() {
  tasks = [];
  nextId = 1;
}

let id=0;
function addTask(name){
    let tache={"name":name,"id":id, "done":false}
    tasks.push(tache);
    id++;
    return tasks.length;
}

function toggleTask(id){
    let newtache={"name":"julien","id":1, "done":false}
    tasks.push(newtache);
    const foundTache = tasks.find(newtache=>newtache.id===id);
    if(foundTache){
        foundTache.done=!foundTache.done;
        return foundTache.done
    }
    return "tache non trouvée";
}

function countDone(){
    let countTask=0;
    tasks.forEach(tache=>{
        if(tache.done) countTask++;
    });
    return countTask;
}

module.exports = {
  getTasks,
  reset,
  addTask,
  toggleTask,
  countDone
}