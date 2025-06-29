import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Reserva } from '../reservas/reservas.entity';

@Entity('Prestamos')
export class Prestamo {
  @PrimaryColumn()
  idPrestamo: number;

  @Column()
  estadoPrestamo: string;

  @Column({ type: 'datetime' })
  horaDevolucion: Date;

  @OneToOne(() => Reserva, (reserva) => reserva.prestamo, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'idReserva' })
  reserva: Reserva;
}
