import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Horario } from '../horarios/horarios.entity';
import { Reserva } from '../reservas/reservas.entity';
import { Solicitud } from '../solicitudes/solicitudes.entity';
import { Valoracion } from '../valoraciones/valoraciones.entity';

@Entity('Recursos')
export class Recurso {
  @PrimaryColumn()
  idRecurso: number;

  @Column()
  nombreRecurso: string;

  @Column()
  ubicacionRecurso: string;

  @Column()
  tipoRecurso: string;

  @Column({
    type: 'tinyint',
    width: 1,
    default: 1,
    /** Convierte 0/1 ↔ false/true */
    transformer: {
      to(value: boolean): number {
        return value ? 1 : 0;
      },
      from(value: number): boolean {
        return Boolean(value);
      },
    },
  })
  isDisponible: boolean;

  @Column({ type: 'time' })
  horaInicioDisponibilidad: string;

  @Column({ type: 'time' })
  horaFinDisponibilidad: string;

  @OneToMany(() => Horario, (horario) => horario.recurso)
  horarios: Horario[];

  @OneToMany(() => Reserva, (reserva) => reserva.recurso)
  reservas: Reserva[];

  @OneToMany(() => Solicitud, (solicitud) => solicitud.recurso)
  solicitudes: Solicitud[];

  @OneToMany(() => Valoracion, (valoracion) => valoracion.recurso)
  valoraciones: Valoracion[];
}
