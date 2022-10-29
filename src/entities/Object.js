import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm"
import { objects, objectRelations } from "../../EnviromentConfig.js"
import Client from './Client.js'

objects.map() // fazer o map e pegar os objetos e seus assets para popular as colunas da classe dinamicamente
objectRelations[i] // usar para identificar as relações e popular a classe dinamicamente também 

@Entity('objects')
export default class Object {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'text' })
    name!: string

    @Column({ type: 'text', nullable: true})
    description!: string

    @ManyToMany(() => Client, clients => clients.id)
    clients!: Client[]
}