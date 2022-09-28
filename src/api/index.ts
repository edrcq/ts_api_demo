import { ModuleList } from "../common/interfaces"
import { TodosController, routes } from "./todos"

export const modules: ModuleList = {
    'todos': {
        name: 'todos',
        routePrefix: '/todos',
        controller: TodosController,
        routes: routes
    }
}
