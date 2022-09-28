import { loadModule } from "./module/module-loader";
import { modules } from '../../api'
import AppServer from "./server.class";

export function init() {
    const port = parseInt(process.env.PORT) || 8080

    const appServer = new AppServer()
    appServer.start(port)
    
    loadModule(modules['todos'], appServer.app)
}
