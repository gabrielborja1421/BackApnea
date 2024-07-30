import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombreCompleto!: string;

  @Column()
  edad!: number;

  @Column()
  sexo!: string;

  @Column()
  lugarNacimiento!: string;

  @Column()
  lugarResidencia!: string;

  @Column()
  diabetes!: boolean;

  @Column()
  hipertension!: boolean;

  @Column()
  enfermedadesCardiacas!: boolean;

  @Column()
  cancer!: boolean;
}
