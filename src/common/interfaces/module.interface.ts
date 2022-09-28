import { Controller } from "./controller.class";
import { ApiRoute } from "./route.interface";

export interface Module {
    controller: Controller,
    routes: ApiRoute[],
    routePrefix: string
    name: string
}

export interface ModuleList {
    [key: string | symbol]: Module
}
