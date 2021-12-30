{
    const tasks = [{
        content: "Wysłać list",
        done: true,
    },
    {
        content: "Wysłać kasę",
        done: false,
    },
    ];

    const removeTask = () => {
        const removeButtons = document.querySelectorAll(".js-removeTask");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1);
                render();
            });
        }
        );

    };



    const render = () => {
        let htmlcode = "";
        for (const task of tasks) {
            htmlcode += `<li ${task.done ? "class=\"taskDone\"" : "class=\"taskUndone\""}>           
            
            <button class="js-importantTask">Ważne</button>${task.content}<button class="js-removeTask">Usuń</button>
            `;
            document.querySelector(".js-tasksList").innerHTML = htmlcode;
        };
        removeTask();
    };


    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false
        });
        render();
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
        render();

        const Form = document.querySelector(".js-toDoForm");

        Form.addEventListener("submit", onFormSubmit);

    }
    init();

};