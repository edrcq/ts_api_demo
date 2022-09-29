import { CrudControllerAction } from "./controller.class";

export type RouteMethod = 'get' | 'post' | 'patch' | 'put' | 'delete'

export interface ApiRoute {
    path: string,
    method: RouteMethod,
    action: CrudControllerAction
}
