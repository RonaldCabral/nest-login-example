import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 140})
    email: string;

    @Column({type: 'varchar', length: 140})
    name: string;

    @Column({type: 'varchar', length: 140})
    password: string
}
