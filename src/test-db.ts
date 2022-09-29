import { Todolist, Todo } from "./core/entities";
import { AppDataSource } from "./core/db/data-source";

export function createTestTodolist(): Promise<Todolist> {
    const todolist = new Todolist()
    todolist.name = 'Ma premiere liste'
    todolist.archived = false
    return AppDataSource.manager.save(todolist)
}
