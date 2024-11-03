let To_Do_compteur = 0 ;
let Doing_compteur = 0 ;
let Done_compteur = 0 ;

let add_task = document.getElementById("add-task");
let delete_task = document.getElementById("delete-task");
let cancel_task = document.getElementById("cancel-task");
let Ajout_card = document.getElementById("Ajout-card");
let modal_Shadow = document.getElementById("Shadow");

let task_modifier = document.createElement('button');

    //  Masquer & Afficher
function AddTransform(disp1, disp2 , vis_hid) {
    add_task.style.visibility = vis_hid;
    cancel_task.classList.remove(disp1);
    cancel_task.classList.add(disp2);

    delete_task.classList.add(disp1);
    delete_task.classList.remove(disp2);

    Ajout_card.classList.remove(disp1);
    Ajout_card.classList.add(disp2);
    
    modal_Shadow.classList.remove(disp1);
    modal_Shadow.classList.add(disp2);
}




add_task.onclick = function() {
    
    AddTransform("d-none", "d-block" , "hidden");

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

    let Add_card = document.getElementById("Add");

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
        
        // fonction donne la position de la card ajouter

        function ChoisStatus(CARD) {
            switch (task_priority.value) {
                case "P1":
                    CARD.style.border = "2px solid red";
                    CARD.style.borderLeft = "10px solid red";
                    break;
                
                case "P2":
                    CARD.style.border = "2px solid orange";
                    CARD.style.borderLeft = "10px solid orange";
                    break;
                case "P3":
                    CARD.style.border = "2px solid green";
                    CARD.style.borderLeft = "10px solid green";
                    break;
                
                default:
                    break;
            }
        }

        function ChoisPriority(CARD , compt){
            if (task_status.value === "To Do") {
                document.getElementById("To-Do").appendChild(CARD);
                // To_Do_compteur += compt;
                // document.getElementsByClassName("To-Do-compteur").innerHTML = To_Do_compteur;
            }
            else if (task_status.value === "Doing") {
                document.getElementById("Doing").appendChild(CARD);
                // Doing_compteur += compt;
                // document.getElementsByClassName("Doing-compteur").innerHTML = Doing_compteur ;
            }
            else if (task_status.value === "Done") {
                document.getElementById("Done").appendChild(CARD);
                // Done_compteur += compt;
                // document.getElementsByClassName("Done-compteur").innerHTML = Done_compteur;
            }
        }

        ChoisStatus(card);
        ChoisPriority(card , 1);
        
        
        task_modifier.className = "task-modifier";
        task_modifier.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#90caf9" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>'
        card.appendChild(task_modifier);

    //     task_modifier.onclick = function() {
    //         AddTransform("d-none", "d-block" , "hidden");

    //         cancel_task.onclick = function(){
    //             AddTransform("d-block", "d-none" , "visible");
    //         }
    //         Add_card.classList.add("d-none");
            
    //         task_title.value = document.getElementById("title").value;
    //         task_descr.value = document.getElementById("description").value;
    //         task_status.value = document.getElementById("status").value;
    //         task_time.value = document.getElementById("time").value;
    //         task_date.value = document.getElementById("date").value;
    //         task_priority.value = document.getElementById("priority").value;


    //         let modifier = document.getElementById("Modifier");
    //         modifier.classList.remove("d-none");
    //         modifier.onclick = function(){
                
    //             card_title.innerHTML = task_title.value ;
    //             card_time.innerHTML = task_time.value;
    //             card_date.innerHTML = task_date.value ;
    //             card_descr.innerHTML = task_descr.value;

    //             ChoisStatus(card);
    //             ChoisPriority(card , 1);

    //             AddTransform("d-block", "d-none" , "visible");
    //             modifier.classList.add("d-none");
    //             Add_card.classList.remove("d-none");

    //         }
    //         cancel_task.onclick = function(){
    //             AddTransform("d-block", "d-none" , "visible");
    //             modifier.classList.add("d-none");
    //             Add_card.classList.remove("d-none");
    //         }
    //     }

        AddTransform("d-block", "d-none" , "visible");
    }
    
    

    task_modifier.onclick = function() {
        AddTransform("d-none", "d-block" , "hidden");

        cancel_task.onclick = function(){
            AddTransform("d-block", "d-none" , "visible");
        }
        Add_card.classList.add("d-none");
        
        task_title.value = document.getElementById("title").value;
        task_descr.value = document.getElementById("description").value;
        task_status.value = document.getElementById("status").value;
        task_time.value = document.getElementById("time").value;
        task_date.value = document.getElementById("date").value;
        task_priority.value = document.getElementById("priority").value;


        let modifier = document.getElementById("Modifier");
        modifier.classList.remove("d-none");
        modifier.onclick = function(){
            
            card_title.innerHTML = task_title.value ;
            card_time.innerHTML = task_time.value;
            card_date.innerHTML = task_date.value ;
            card_descr.innerHTML = task_descr.value;

            ChoisStatus(card);
            ChoisPriority(card , 1);

            AddTransform("d-block", "d-none" , "visible");
            modifier.classList.add("d-none");
            Add_card.classList.remove("d-none");

        }
        cancel_task.onclick = function(){
            AddTransform("d-block", "d-none" , "visible");
            modifier.classList.add("d-none");
            Add_card.classList.remove("d-none");
        }
    }

    cancel_task.onclick = function(){
        AddTransform("d-block", "d-none" , "visible");
    }

    task_title.value = "";
    task_descr.value = "";
    task_time.value = "";
    task_date.value = "";
    task_status.value = "/-";
    task_priority.value = "/-";
}







