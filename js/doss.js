let task_title = document.getElementById("title").value;
task_title.className = "task-title";
// let task_descr = document.getElementById("description").value;
let task_status = document.getElementById("status").value;
let task_time = document.getElementById("time").value;
let task_date = document.getElementById("date").value;
let task_priority = document.getElementById("priority").value;


task_title.className = "task-title";
// task_descr.className = "task-descr";
task_status.className = "task-status";
task_time.className = "task-date";
task_priority.className = "task-priority";

task_title.textContent = "task_title";

let submit = document.querySelector(".submit");

submit.onclick = function() {
    let card = document.createElement("div");
    card.classname = "task";

    card.appendChild(task_title);
    card.appendChild(document.createTextNode (task_time));
    card.appendChild(document.createTextNode( task_date));

    let task_delete = document.createElement('button');
    task_delete.onclick = function(){
        card.remove();
    }

    let task_done = document.createElement('dive');
    task_done.textContent = "Done";
    let done_input = document.createElement('input');
    done_input.type = 'checkbox' ;
    task_done.appendChild(done_input);

    card.appendChild(task_delete);
    card.appendChild(task_done);
    
    if (task_status === "To Do") {
        document.getElementsByClassName(".To-Do").appendChild(card);
    }
    else if (task_status === "Doing") {
        document.getElementsByClassName(".Doing").appendChild(card);
    }
    else {
        // document.getElementsByClassName(".Done").appendChild(card);
    }

    task_title.value = "";
    // task_descr.value = "";
    task_time.value = "";
    task_date.value = "";

    console.log(card);
}