import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recurso } from './recursos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecursosService {
    constructor(
        @InjectRepository(Recurso) private recursoRepositorio: Repository<Recurso>
    ){}
}
