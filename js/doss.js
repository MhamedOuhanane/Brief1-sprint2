let task_title = document.getElementById("title");
let card_title = document.createElement('div');
card_title.className = "task-title";

let task_descr = document.getElementById("description");
let card_descr = document.createElement('div');
card_descr.className = "task-descr";

let task_status = document.getElementById("status");

let task_time = document.getElementById("time");
let card_time = document.createElement('div');
card_time.className = "task-time";

let task_date = document.getElementById("date");
let card_date = document.createElement('div');
card_time.className = "task-date";

let task_priority = document.getElementById("priority");

let Add_card = document.getElementById("submit");

Add_card.onclick = function() {
    let card = document.createElement('div');
    card.className = "task";

    card_title.appendChild(document.createTextNode(task_title.value));
    card_time.appendChild(document.createTextNode(task_time.value));
    card_date.appendChild(document.createTextNode( task_date.value));
    // card_descr.appendChild(document.createTextNode(task_descr.value));

    let task_delete = document.createElement('button');
    task_delete.textContent = "Delete";
    task_delete.className = "task-delete";
    let delete_Id = new Date();
    task_delete.Id = "delete_Id";
    console.log(task_delete.Id);
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

    card.appendChild(card_title);
    card.appendChild(card_time);
    card.appendChild(card_date);
    card.appendChild(card_descr);
    card.appendChild(task_delete);
    card.appendChild(task_done);

    switch (task_priority.value) {
        case "P1":
            card.style.border = "2px solid red";
            card.style.borderLeft = "10px solid red";
            break;
        
        case "P2":
            card.style.border = "2px solid green";
            card.style.borderLeft = "10px solid green";
            break;
        case "P3":
            card.style.border = "2px solid blue";
            card.style.borderLeft = "10px solid blue";
            break;
        
        default:
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
    task_descr.value = "";
    task_time.value = "";
    task_date.value = "";

    console.log(card);
}