import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Solicitud } from './solicitudes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudesService {
    constructor(
        @InjectRepository(Solicitud) private solicitudRepositorio: Repository<Solicitud>
    ) {}
}
