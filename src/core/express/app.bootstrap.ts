import AppServer from "./server.class";

export function init() {
    const port = parseInt(process.env.PORT) || 8080

    const appServer = new AppServer()
    appServer.start(port)
    
}
