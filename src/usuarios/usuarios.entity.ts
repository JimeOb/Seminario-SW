import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from '../reservas/reservas.entity';
import { Solicitud } from '../solicitudes/solicitudes.entity';
import { Valoracion } from '../valoraciones/valoraciones.entity';

@Entity('Usuarios')
export class Usuario {
  @PrimaryColumn()
  identificacionUsuario: number;

  @Column()
  nombre: string;

  @Column()
  contraseña: string;

  @OneToMany(() => Reserva, (reserva) => reserva.usuario)
  reservas: Reserva[];

  @OneToMany(() => Solicitud, (solicitud) => solicitud.usuario)
  solicitudes: Solicitud[];

  @OneToMany(() => Valoracion, (valoracion) => valoracion.usuario)
  valoraciones: Valoracion[];
}
