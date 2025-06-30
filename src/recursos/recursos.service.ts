import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recurso } from './recursos.entity';
import { Repository } from 'typeorm';
import { CrearRecursoDto } from './dto/crearRecurso.dto';

@Injectable()
export class RecursosService {
    constructor(
        @InjectRepository(Recurso) private recursoRepositorio: Repository<Recurso>
    ){}

    async crearRecurso(recurso: CrearRecursoDto): Promise<Recurso> {
        const recursoNuevo = this.recursoRepositorio.create(recurso);
        return this.recursoRepositorio.save(recursoNuevo);
    }
}
