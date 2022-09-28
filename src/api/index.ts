import { ModuleList } from "../common/interfaces"
import { TodosController, routes } from "./todos"

export const modules: ModuleList = {
    'todos': {
        controller: TodosController,
        routes: routes
    }
}
