import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Recurso } from '../recursos/recursos.entity';
import { Usuario } from '../usuarios/usuarios.entity';

export type SolicitudEstado = 'PENDIENTE' | 'ACEPTADA' | 'RECHAZADA';

@Entity('Solicitudes')
export class Solicitud {
  @PrimaryGeneratedColumn()
  idSolicitud: number;

  @ManyToOne(() => Usuario, u => u.solicitudes, { eager: true })
  @JoinColumn({ name: 'identificacionUsuario' })
  usuario: Usuario;

  @ManyToOne(() => Recurso, r => r.solicitudes, { eager: true })
  @JoinColumn({ name: 'idRecurso' })
  recurso: Recurso;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'enum', enum: ['PENDIENTE','ACEPTADA','RECHAZADA'], default: 'PENDIENTE' })
  estado: SolicitudEstado;
}
