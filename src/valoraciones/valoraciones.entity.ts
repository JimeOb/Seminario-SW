import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Recurso } from '../recursos/recursos.entity';
import { Usuario } from '../usuarios/usuarios.entity';

@Entity('Valoraciones')
export class Valoracion {
  @PrimaryColumn()
  idValoracion: number;

  @Column()
  nroValoracion: string; // Usa number si lo prefieres

  @Column()
  comentarioValoracion: string;

  @Column({ type: 'date' })
  fechaValoracion: string;

  @ManyToOne(() => Recurso, (recurso) => recurso.valoraciones, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'idRecurso' })
  recurso: Recurso;

  @ManyToOne(() => Usuario, (usuario) => usuario.valoraciones, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'identificacionUsuario' })
  usuario: Usuario;
}
