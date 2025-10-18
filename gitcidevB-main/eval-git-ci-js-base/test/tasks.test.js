const { getTasks, reset, addTask, toggleTask, countDone } = require("../lib/tasks.js");

let prenom="julien"
test("addTask(prenom)",()=>{
    expect(addTask(prenom)).toBe(1);
})

let id=0;
let tasks=[];
let tache={"name":"julien","id":1, "done":false}
tasks.push(tache);
test("toggleTask(id)",()=>{
    let returnToggle =toggleTask(id)
    expect(typeof(returnToggle)).toBe("boolean")
})

test("countDone()",()=>{
    let returnCount =countDone();
    expect(typeof(returnCount)).toBe("number")
})