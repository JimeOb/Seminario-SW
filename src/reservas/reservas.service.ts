import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './reservas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReservasService {
    constructor(
        @InjectRepository(Reserva) private reservaRepositorio: Repository<Reserva>
    ){}
}
