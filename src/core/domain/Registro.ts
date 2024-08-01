import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  edad!: number;

  @Column()
  sexo!: string;

  @Column()
  estatura!: number;  // Corrigiendo tipo de datos

  @Column()
  peso!: number;  // Corrigiendo tipo de datos

  @Column()
  padecimientos!: string;

  @Column({ default: '120/80' })  // Añadiendo valor por defecto como string
  presion!: string;

  @Column()
  spo2!: number;  // Corrigiendo tipo de datos
}
