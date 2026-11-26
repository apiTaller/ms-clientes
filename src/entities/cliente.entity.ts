import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clientes')
export class Cliente {
  //username,correo,password,notas,valoraciones.
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  nombre!: string;

  @Column({ nullable: true, length: 200 })
  direccion?: string;

  @Column({ nullable: true, length: 100 })
  localidad?: string;

  @Column({ nullable: true, length: 100 })
  provincia?: string;
}