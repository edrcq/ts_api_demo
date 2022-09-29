import "reflect-metadata"
import { DataSource } from "typeorm"
import { Todolist, Todo } from "../entities"

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'db.sqlite',
    /*
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test'
    */
   synchronize: true,
   logging: true,
   entities: [Todolist, Todo],
   migrations: [],
})
