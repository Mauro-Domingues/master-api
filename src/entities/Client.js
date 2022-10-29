import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm"
import { clients, clientRelations } from "../../EnviromentConfig.js"
import ObjectClass from './Object.js'

clients.map() // fazer o map e pegar os objetos e seus assets para popular as colunas da classe dinamicamente
clientRelations[i] // usar para identificar as relações e popular a classe dinamicamente também 

@Entity('objects')
export default class Object {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'text' })
    name!: string

    @Column({ type: 'text', nullable: true})
    description!: string

    @ManyToMany(() => ObjectClass, objects => objects.id)
    objects!: ObjectClass[]
}