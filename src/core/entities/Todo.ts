import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Todolist } from './Todolist'
import { TodoState } from '../../common/interfaces'

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    state: TodoState

    @ManyToOne(() => Todolist, (todolist) => todolist.todos)
    todolist: Todolist
}
