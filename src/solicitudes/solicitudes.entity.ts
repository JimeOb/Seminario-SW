import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Recurso } from '../recursos/recursos.entity';
import { Usuario } from '../usuarios/usuarios.entity';

@Entity('Solicitudes')
export class Solicitud {
  @PrimaryColumn()
  idSolicitud: number;

  @Column()
  estadoSolicitud: string;

  @Column({ type: 'date' })
  fechaSolicitud: string;

  @ManyToOne(() => Recurso, (recurso) => recurso.solicitudes, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'idRecurso' })
  recurso: Recurso;

  @ManyToOne(() => Usuario, (usuario) => usuario.solicitudes, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'identificacionUsuario' })
  usuario: Usuario;
}
