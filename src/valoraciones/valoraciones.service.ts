import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Valoracion } from './valoraciones.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ValoracionesService {
    constructor(
        @InjectRepository(Valoracion) private valoracionRepositorio: Repository<Valoracion>
    ) {}
}
