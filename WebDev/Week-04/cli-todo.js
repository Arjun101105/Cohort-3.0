const {Command} = require("commander")
const program = new Command()



program.command("Add_To-Do")
    .description("adding a task to your to-do list")
    .argument('<T>', 'Task to be added ')

program.command("Delete_To-do")
    .description("deleting a task from your to-do list")
    .argument('<T>', 'Task to be deleted')

program.parse()
