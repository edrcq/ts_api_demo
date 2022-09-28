import express, { Express } from 'express'
import { simpleLogger } from './middlewares/simple-logger'

class AppServer {
    app: Express

    constructor() {
        this.app = express()
        this.registerDefaultMiddlewares()
    }

    registerDefaultMiddlewares() {
        // parse json body (Content-type: application/json)
        this.app.use(express.json())
        // simple log requests
        this.app.use(simpleLogger)
    }

    start(port: number) {
        this.app.listen(port, () => {
            console.log(`Started on http://127.0.0.1:${port}/`)
        })
    }
}

export default AppServer
