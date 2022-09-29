import { config } from "dotenv";
import { init } from "./core/express/app.bootstrap";
import { AppDataSource } from './core/db/data-source'
import { createTestTodolist } from './test-db'

config();

// connexion a la db
AppDataSource.initialize().then(() => {
    // init web server
    init();
    createTestTodolist().then(console.log)
})
