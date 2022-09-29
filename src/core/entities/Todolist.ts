import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Todo } from './Todo'

@Entity()
export class Todolist {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        default: false
    })
    archived: boolean

    @OneToMany(() => Todo, (todo) => todo.todolist)
    todos: Todo[]
}
