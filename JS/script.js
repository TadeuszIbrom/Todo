{
    const tasks = [

        { content: "Wysłać list", done: true, },
        { content: "Wysłać kasę", done: false, },
    ];

    const render = () => {
        let htmlcode = ""
        for (task of tasks) {
            htmlcode += `<li>
            ${task.content}</li>`
        }
        document.querySelector(".js-taskList").innerHTML= htmlcode;
    };

    const init = () => {
        console.log(tasks);
        render();

    };

    init();

};



