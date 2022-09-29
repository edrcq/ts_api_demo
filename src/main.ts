import { config } from "dotenv";
import { init } from "./core/express/app.bootstrap";
import { AppDataSource } from './core/db/data-source'
import { addTodo, createTestTodolist, getAllTodos, getTodolistById } from './test-db'

config();

// connexion a la db
AppDataSource.initialize().then(() => {
    // init web server
    init();
    // getAllTodos()
    // createTestTodolist().then(async (todolist) => {
    //     const getTodolist = await getTodolistById(todolist.id)
    //     await addTodo(getTodolist, 'New todo!')
    // })
})
