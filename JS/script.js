{
    const tasks = [{
        content: "Wysłać list",
        done: true,
        importent: false
    },
    {
        content: "Wysłać kasę",
        done: false,
        importent: false
    },
    ];

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render()
    }
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false,
            importent: false,
        });
        render();
    }
    const taskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render()
    }
    const toggleImportentTask = (index) => {
        tasks[index].importent = !tasks[index].importent;
        render()

    }

    bindEvents = () => {
        const taskDoneButtons = document.querySelectorAll(".js-taskDone");
        taskDoneButtons.forEach
            ((taskDoneButton, index) => {
                taskDoneButton.addEventListener
                    ("click", () => { taskDone(index); });
            });

        const removeButtons = document.querySelectorAll(".js-removeTask");
        removeButtons.forEach
            ((removeButton, index) => {
                removeButton.addEventListener
                    ("click", () => { removeTask(index); });
            });


        const importantTasks = document.querySelectorAll(".js-importantTask");
        importantTasks.forEach
            ((importantTask, index) => {
                importantTask.addEventListener
                    ("click", () => { toggleImportentTask(index); });
            });

    }




    const render = () => {
        let htmlcode = "";
        for (const task of tasks) {
            if (task.importent === true) {
                htmlcode += `<li ${task.done ? "class=\"toDo__task toDo--important taskDone\"" : "class=\"toDo__task toDo--important taskUndone\""}>                  
            <button class="button btn--importantTask js-importantTask">!</button>
            <button class="button btn-taskDone js-taskDone">✔</button>
            <span class="taskContent">${task.content}</span>
            <button  class="button  btn--removeTask js-removeTask"><i class="fas fa-trash"></i></button>
            `
            } else {
                htmlcode += `<li ${task.done ? "class=\"toDo__task taskDone\"" : "class=\"toDo__task taskUndone\""}>                  
            <button class="button btn--importantTask js-importantTask"></button>
            <button class="button btn-taskDone js-taskDone">✔</button>
            <span class="taskContent">${task.content}</span>
            <button  class="button  btn--removeTask js-removeTask"><i class="fas fa-trash"></i></button>
            `;

            }






        };
        document.querySelector(".js-tasksList").innerHTML = htmlcode;
        bindEvents();


    }








    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskElement = document.querySelector(".js-addContent");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }
        newTaskElement.focus();

    }





    const init = () => {
        const Form = document.querySelector(".js-toDoForm");
        Form.addEventListener("submit", onFormSubmit);
        render();
    }

    init();

};