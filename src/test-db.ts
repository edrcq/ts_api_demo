import { Todolist, Todo } from "./core/entities";
import { AppDataSource } from "./core/db/data-source";

const todolistRepository = AppDataSource.getRepository(Todolist)
const todoRepository = AppDataSource.getRepository(Todo)

export function createTestTodolist(): Promise<Todolist> {
    const todolist = new Todolist()
    todolist.name = 'Ma premiere liste'
    todolist.archived = false
    return todolistRepository.save(todolist)
}

export function getTodolistById(id: number) {
    return todolistRepository.findOne({ where: { id }, relations: {
        todos: true
    }})
}

export async function addTodo(todolist: Todolist, text: string) {
    console.log(todolist)
    const todo = await todoRepository.create({ text, todolist: todolist })
    await todoRepository.save(todo)
    console.log(todolist)
    const freshTodolist = await getTodolistById(todolist.id)
    console.log(freshTodolist)
}

export async function getAllTodos() {
    const list = await todoRepository.find()
    console.log({ list })
}
