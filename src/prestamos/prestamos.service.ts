import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './prestamos.entity';
import { Repository } from 'typeorm';
import { CrearPrestamoDTO } from './dto/crearPrestamo.dto';
import { RegistrarDevolucionDTO } from './dto/registrarDevolucion.dto';

@Injectable()
export class PrestamosService {
    constructor(
        @InjectRepository(Prestamo) private prestamoRepositorio: Repository<Prestamo>,
    ){}

    async crearPrestamo(prestamo: CrearPrestamoDTO): Promise<Prestamo> {
        const nuevoPrestamo = this.prestamoRepositorio.create({
            idPrestamo: prestamo.idPrestamo,
            estadoPrestamo: prestamo.estadoPrestamo,
            horaDevolucion: prestamo.horaDevolucion,
            reserva: { idReserva: prestamo.idReserva } 
        });
        return this.prestamoRepositorio.save(nuevoPrestamo);
    }

    async registrarDevolucion(pk: number, prestamo: RegistrarDevolucionDTO): Promise<void> {
        const resultado = await this.prestamoRepositorio.update(pk, prestamo);
        if (resultado.affected === 0) {
            throw new NotFoundException('No se encontró el préstamo con el ID: ' + pk);
        }
    }
}
