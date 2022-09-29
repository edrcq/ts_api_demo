import { Module } from "../../../common/interfaces/module.interface";
import { Express, Router } from "express";

export function autoImportAllModules() {
    
}

export function loadModule(module: Module, appExpress: Express) {
    const router = Router()

    for(const route of module.routes) {
        router[route.method](route.path, module.controller[route.action])
    }

    appExpress.use(module.routePrefix, router)
}
