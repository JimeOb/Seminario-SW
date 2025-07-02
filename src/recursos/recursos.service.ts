import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recurso } from './recursos.entity';
import { Repository } from 'typeorm';
import { CrearRecursoDto } from './dto/crearRecurso.dto';
import { GetRecursosFilterDto } from './dto/recursosFilter.dto';

@Injectable()
export class RecursosService {
    constructor(
        @InjectRepository(Recurso) private recursoRepositorio: Repository<Recurso>
    ){}

    async crearRecurso(recurso: CrearRecursoDto): Promise<Recurso> {
        const recursoNuevo = this.recursoRepositorio.create(recurso);
        return this.recursoRepositorio.save(recursoNuevo);
    }

    // eslint-disable-next-line @typescript-eslint/require-await
    async findAll(filterDto: GetRecursosFilterDto): Promise<Recurso[]> {
        const { tipo, isDisponible } = filterDto;
        const where: Partial<Recurso> = {};
        if (tipo)        where.tipoRecurso = tipo;
        if (isDisponible !== undefined) where.isDisponible = isDisponible;
        return this.recursoRepositorio.find({ where });
      }
}
