import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Recurso } from '../recursos/recursos.entity';

@Entity('Horarios')
export class Horario {
  @PrimaryColumn()
  idHorario: number;

  @Column()
  diaSemana: string;

  @Column({ type: 'time' })
  horaInicio: string;

  @Column({ type: 'time' })
  horaFinal: string;

  @ManyToOne(() => Recurso, (recurso) => recurso.horarios, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'idRecurso' })
  recurso: Recurso;
}
