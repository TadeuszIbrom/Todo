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
    const toogleImportentTask = (index) => {
        console.log(tasks)
        tasks[index].importent = !tasks[index].importent;
        
        if (tasks[index].importent === true) {
            const importentTask = document.querySelectorAll(".task");
            importentTask[index].classList.toggle("importanttask");
        } return;
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


        const importantTasks = document.querySelectorAll(".importantTask");
        importantTasks.forEach
            ((importantTask, index) => {
                importantTask.addEventListener
                    ("click", () => { toogleImportentTask(index); });
            });
    }




    const render = () => {
        let htmlcode = "";
        for (const task of tasks) {
            htmlcode += `<li ${task.done ? "class=\"task taskDone\"" : "class=\"task taskUndone\""}>                  
            <button class="button importantTask js-importantTask"><i class="fa fa-exclamation" aria-hidden="true"></i>
            </button>
            <button class="button done js-taskDone"><i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <span class="taskContent">${task.content}</span>
            <button  class="button  removeTask js-removeTask"><i class="fas fa-trash"></i></button>
            `;


        };
        document.querySelector(".js-tasksList").innerHTML = htmlcode;

        bindEvents();
    }








    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-addTask").value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    }


    const init = () => {

        const Form = document.querySelector(".js-toDoForm");
        Form.addEventListener("submit", onFormSubmit);
        render();
        bindEvents();
    }
    init();

};