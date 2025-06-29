import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './prestamos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrestamosService {
    constructor(
        @InjectRepository(Prestamo) private prestamoRepositorio: Repository<Prestamo>,
    ){}
}
