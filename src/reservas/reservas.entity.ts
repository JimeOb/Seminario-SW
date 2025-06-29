import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';
import { Recurso } from '../recursos/recursos.entity';
import { Prestamo } from '../prestamos/prestamos.entity';

@Entity('Reservas')
export class Reserva {
  @PrimaryColumn()
  idReserva: number;

  @Column({ type: 'datetime' })
  horaInicio: Date;

  @Column({ type: 'datetime' })
  horaFinal: Date;

  @Column()
  estadoReserva: string;

  @ManyToOne(() => Recurso, (recurso) => recurso.reservas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'idRecurso' })
  recurso: Recurso;

  @ManyToOne(() => Usuario, (usuario) => usuario.reservas, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'identificacionUsuario' })
  usuario: Usuario;

  @OneToOne(() => Prestamo, (prestamo) => prestamo.reserva)
  prestamo: Prestamo;
}
