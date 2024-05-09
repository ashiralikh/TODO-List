import inquirer from "inquirer"

let todos =[];
let condtion = true;
while (condtion)
    {
        let addtask = await inquirer.prompt([
    {
        name: "todo",
        type: "input",
        message: "what do you want to Add in your todo?",
    },
    {
        name: "addMore",
        type: "confirm",
        message: "Do you want to add more?",
        default: "false"

    }
])
todos.push(addtask.todo);
condtion = addtask.addMore
console.log(todos);
    }
