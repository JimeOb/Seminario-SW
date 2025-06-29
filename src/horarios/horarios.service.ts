import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Horario } from './horarios.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorariosService {
    constructor(
        @InjectRepository(Horario) private horarioRepositorio: Repository<Horario>,
    ) {}

}
