import { ApiRoute } from "../../common/interfaces/route.interface";

const routes: ApiRoute[] = [
    {
        method: "get",
        path: "/",
        action: "getAll"
    },
    {
        method: "get",
        path: "/:id",
        action: "getOne"
    },
    {
        method: "post",
        path: "/",
        action: "create"
    },
    {
        method: "put",
        path: "/:id",
        action: "replace"
    },
    {
        method: "patch",
        path: "/:id",
        action: "update"
    },
    {
        method: "delete",
        path: "/:id",
        action: "remove"
    }
]

export default routes;
