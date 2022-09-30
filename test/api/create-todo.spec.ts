import { describe, expect, test } from '@jest/globals'
import request from 'supertest'
import { AppDataSource } from '../../src/core/db/data-source'
import { init } from '../../src/core/express/app.bootstrap'
import AppServer from '../../src/core/express/server.class'

const createTodoData = {
    name: 'Nouvelle todo liste'
}

let appServer: AppServer;
beforeAll(async () => {
    await AppDataSource.initialize()
    appServer = init()
})

describe('Module todos', () => {

    test('create a new todo', () => {
        return request(appServer.app)
                .post('/todos')
                .send(createTodoData)
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .then(response => {
                    expect(response.body.name).toBe(createTodoData.name)
                })
        
    })

    test('create a new todo - bad request', () => {
        return request(appServer.app)
                .post('/todos')
                .send({ test: 'not a todolist' })
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(400)
                .then(response => {
                    expect(response.body.message).toBe('bad schema createTodolist')
                })
                
        
    })


})
