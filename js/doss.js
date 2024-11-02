let To_Do_compteur = 0 ;
let Doing_compteur = 0 ;
let Done_compteur = 0 ;

let add_task = document.getElementById("add-task");
let delete_task = document.getElementById("delete-task");
let cancel_task = document.getElementById("cancel-task");
let Ajout_card = document.getElementById("Ajout-card");
let List_card = document.getElementById("List-card");

let disp1 = String, disp2 = String;
let vis_hid = String;

function AddTransform(disp1, disp2 , vis_hid) {
    add_task.style.visibility = vis_hid;
    cancel_task.classList.remove(disp1);
    cancel_task.classList.add(disp2);

    delete_task.classList.add(disp1);
    delete_task.classList.remove(disp2);

    Ajout_card.classList.remove(disp1);
    Ajout_card.classList.add(disp2);

    List_card.classList.add(disp1);
    List_card.classList.remove(disp2);
}

add_task.onclick = function() {
    
    AddTransform("d-none", "d-block" , "hidden");

    cancel_task.onclick = function(){
        AddTransform("d-block", "d-none" , "visible");
    }

    

    
    

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
    card_date.className = "task-date";

    let task_priority = document.getElementById("priority");

    let Add_card = document.getElementById("submit");

    Add_card.onclick = function() {

        let card = document.createElement('div');
        card.className = "task";

        card_title.innerHTML = task_title.value ;
        card_time.innerHTML = task_time.value;
        card_date.innerHTML = task_date.value ;
        card_descr.innerHTML = task_descr.value;

        let task_delete = document.createElement('button');
        task_delete.textContent = "Delete";
        task_delete.className = "task-delete";
        task_delete.onclick = function(){
            card.remove();
            // if (task_status.value === "To Do") {
            //     To_Do_compteur--;
            // }
            // else if (task_status.value === "Doing") {
            //     Doing_compteur-- ;
            // }
            // else if (task_status.value === "Done") {
            //     Done_compteur-- ;
            // }
        }

        let task_done = document.createElement('dive');
        let done_label = document.createElement('label')
        done_label.textContent = "Done";
        task_done.className = "task-done"
        done_label.htmlFor = "done";
        task_done.appendChild(done_label);
        let done_input = document.createElement('input');
        done_input.className = "done-input";
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
                card.style.border = "2px solid orange";
                card.style.borderLeft = "10px solid orange";
                break;
            case "P3":
                card.style.border = "2px solid green";
                card.style.borderLeft = "10px solid green";
                break;
            
            default:
                break;
        }

        if (task_status.value === "To Do") {
            document.getElementById("To-Do").appendChild(card);
            // To_Do_compteur++;
            // document.getElementsByClassName("To-Do-compteur").innerHTML = To_Do_compteur;
        }
        else if (task_status.value === "Doing") {
            document.getElementById("Doing").appendChild(card);
            // Doing_compteur++;
            // document.getElementsByClassName("Doing-compteur").innerHTML = Doing_compteur ;
        }
        else if (task_status.value === "Done") {
            document.getElementById("Done").appendChild(card);
            // Done_compteur++;
            // document.getElementsByClassName("Done-compteur").innerHTML = Done_compteur;
        }

        AddTransform("d-block", "d-none" , "visible");
        
        console.log(To_Do_compteur);
        console.log(Doing_compteur);
        console.log(Done_compteur);
        
        console.log(card);
    }

    task_title.value = "";
    task_descr.value = "";
    task_time.value = "";
    task_date.value = "";
    task_status.value = "/-";
    task_priority.value = "/-";
}







