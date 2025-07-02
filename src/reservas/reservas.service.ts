/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './reservas.entity';
import { Repository } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CrearReservaDto } from './dto/crearReserva.dto';
@Injectable()
export class ReservasService {
    constructor(
        @InjectRepository(Reserva) private reservaRepositorio: Repository<Reserva>
    ){}

    async crearReserva(reserva: CrearReservaDto): Promise<Reserva> {
        const nuevaReserva = this.reservaRepositorio.create({
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            idReserva: reserva.idReserva,
            horaInicio: reserva.horaInicio,
            horaFinal: reserva.horaFinal,
            recurso: { idRecurso: reserva.idRecurso }, // Asumiendo que el recurso es una entidad relacionada
            usuario: { identificacionUsuario: reserva.identificacionUsuario }, // Asumiendo que el
            estadoReserva: reserva.estadoReserva,
        });
        return this.reservaRepositorio.save(nuevaReserva);
    }

    async obtenerReservasPorsuario(idUsuario: number): Promise<Reserva[]> {
        return this.reservaRepositorio.find({
            where: { usuario: { identificacionUsuario: idUsuario }},
        })
    }
}
