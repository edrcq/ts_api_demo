

interface ITodoList {
    name: string
    todos?: ITodo[]
    archived?: boolean
}

interface ITodo {
    text: string
    state: TodoState

    changeState: ()=>TodoState
}

enum TodoState {
    DONE = "done",
    TODO = "todo",
}

type TodoStates = keyof typeof TodoState

class TodoList implements ITodoList {
    name = "Default name"
    todos: ITodo[]
}

class Todo implements ITodo {
    state = TodoState.TODO
    text = ""

    constructor(text: string) {
        this.text = text;
    }

    changeState() {
        this.state = this.state === TodoState.TODO ? TodoState.DONE : TodoState.TODO
        return this.state
    }
}

class AdvancedTodo extends Todo {
    description: string = ""

    constructor(text: string, description: string) {
        super(text);
        this.description = description;
    }
}

const todoList1 = new TodoList()

if (!todoList1.todos) {
    todoList1.todos = []
}

todoList1.todos.push(
    new Todo('first thing todo')
)
todoList1.todos.push(
    new AdvancedTodo('second thing todo', 'Hello world description')
)

todoList1.todos.forEach(todo => console.log(todo))
todoList1.todos.forEach(todo => todo.changeState())
todoList1.todos.forEach(todo => console.log(todo))

for (const todo of todoList1.todos) {
    if (todo instanceof AdvancedTodo) {
        todo.description = todo.description.toUpperCase()
    }
}

todoList1.todos.forEach(todo => console.log(todo))
