{
    const tasks = [
        { content: "Wysłać list", done: true, },
        { content: "Wysłać kasę", done: false, },
    ];

    const render = () => {
        let htmlcode = "";
        for (const task of tasks) {
            htmlcode += `<li ${task.done ? "class=\"taskDone\"" : "class=\"taskUndone\""}>${task.content};
            `;
            document.querySelector(".js-tasksList").innerHTML = htmlcode;
        };
    };

   
    const addNewTask = (newTaskContent) => {
        tasks.push({ content: newTaskContent, });
        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-addTask").value.trim();
        if (newTaskContent === "") { return; }
        addNewTask(newTaskContent);
    }


    const init = () => {
        render();
      
        const Form = document.querySelector(".js-toDoForm");

        Form.addEventListener("submit", onFormSubmit);

    }
    init();

};