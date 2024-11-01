let task_title = document.getElementById("title");
task_title.value.className = "task-title";
// let task_descr = document.getElementById("description").value;
let task_status = document.getElementById("status");
let task_time = document.getElementById("time");
let task_date = document.getElementById("date");
let task_priority = document.getElementById("priority");


task_title.value.className = "task-title";
// task_descr.className = "task-descr";
task_status.value.className = "task-status";
task_time.value.className = "task-date";
task_priority.value.className = "task-priority";

let submit = document.querySelector(".submit");

submit.onclick = function() {
    let card = document.createElement("div");
    card.className = "task";

    card.appendChild(document.createTextNode(task_title.value));
    card.appendChild(document.createTextNode(task_time.value));
    card.appendChild(document.createTextNode( task_date.value));

    let task_delete = document.createElement('button');
    task_delete.textContent = "Delete";
    task_delete.className = "task-delete";
    let delete_Id = new Date();
    task_delete.Id = "delete_Id";
    delete_Id.onclick = function(){
        card.remove();
    }

    let task_done = document.createElement('dive');
    let done_label = document.createElement('label')
    done_label.textContent = "Done";
    task_done.className = "task-done"
    done_label.htmlFor = "done";
    task_done.appendChild(done_label);
    let done_input = document.createElement('input');
    done_input.id = "done";
    done_input.type = 'checkbox' ;
    task_done.appendChild(done_input);

    card.appendChild(task_delete);
    card.appendChild(task_done);

    switch (task_priority.value) {
        case "P1":
            card.style.border = "3px solid red";
            break;

        case "P2":
            card.style.border = "3px solid green";
            break;
        case "P2":
            card.style.border = "3px solid blue";
            break;

        default:
            return;
            break;
    }
    
    if (task_status.value === "To Do") {
        document.getElementById("To-Do").appendChild(card);
    }
    else if (task_status.value === "Doing") {
        document.getElementById("Doing").appendChild(card);
    }
    else if (task_status.value === "Done") {
        document.getElementById("Done").appendChild(card);
    }

    task_title.value = "";
    // task_descr.value = "";
    task_time.value = "";
    task_date.value = "";

    console.log(card);
}