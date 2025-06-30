import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Horario } from './horarios.entity';
import { Repository } from 'typeorm';
import { CrearHorarioDTO } from './dto/crearHorario.dto';

@Injectable()
export class HorariosService {
    constructor(
        @InjectRepository(Horario) private horarioRepositorio: Repository<Horario>,
    ) {}

    async crearHorario(horario: CrearHorarioDTO): Promise<Horario> {
        const nuevoHorario = this.horarioRepositorio.create(horario);
        return this.horarioRepositorio.save(nuevoHorario);
    }

}
