import { CrudControllerAction } from "../../common/interfaces/controller.class";
import { ApiRoute } from "../../common/interfaces/route.interface";

const routes: ApiRoute[] = [
    {
        method: "get",
        path: "/",
        action: CrudControllerAction.GET_ALL
    },
    {
        method: "get",
        path: "/:id",
        action: CrudControllerAction.GET_ONE
    },
    {
        method: "post",
        path: "/",
        action: CrudControllerAction.CREATE
    },
    {
        method: "put",
        path: "/:id",
        action: CrudControllerAction.REPLACE
    },
    {
        method: "patch",
        path: "/:id",
        action: CrudControllerAction.UPDATE
    },
    {
        method: "delete",
        path: "/:id",
        action: CrudControllerAction.REMOVE
    }
]

export default routes;
