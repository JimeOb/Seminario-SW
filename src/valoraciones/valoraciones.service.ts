import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Valoracion } from './valoraciones.entity';
import { Repository } from 'typeorm';
import { CreateValoracionDto } from './dto/createValoracionDto';
import { Usuario } from 'src/usuarios/usuarios.entity';
import { Recurso } from 'src/recursos/recursos.entity';

@Injectable()
export class ValoracionesService {
    valoracionRepo: any;
    constructor(
        @InjectRepository(Valoracion) private valoracionRepositorio: Repository<Valoracion>
    ) {}

    // eslint-disable-next-line @typescript-eslint/require-await
    async create(dto: CreateValoracionDto): Promise<Valoracion> {
        // 1) Instancia “vacía” y asigna propiedades manualmente
        const val = this.valoracionRepositorio.create(); // ya es DeepPartial<Valoracion>
    
        // 2) Asigna el usuario (solo con la PK)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        val.usuario = { identificacionUsuario: dto.identificacionUsuario } as Usuario;
    
        // 3) Asigna el recurso (solo con la PK)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        val.recurso = { idRecurso: dto.reservaId } as Recurso;
    
        // 4) Resto de campos
        val.nroValoracion       = dto.estrellas.toString();        // o usa number según tu entidad
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        val.comentarioValoracion = dto.comentario;
        val.fechaValoracion      = dto.fechaValoracion;            // si lo envías en el DTO
        //   o bien: val.fechaValoracion = new Date().toISOString().split('T')[0];
    
        // 5) Guarda y devuelve la entidad completa
        return this.valoracionRepositorio.save(val);
      }
    
      // eslint-disable-next-line @typescript-eslint/require-await
      async findByReserva(reservaId: number): Promise<Valoracion[]> {
        return this.valoracionRepositorio.find({
          where: { recurso: { idRecurso: reservaId },},
        });
      }
    
      // eslint-disable-next-line @typescript-eslint/require-await
      async findByUsuario(identificacionUsuario: number): Promise<Valoracion[]> {
        return this.valoracionRepositorio.find({
          where: { usuario: { identificacionUsuario } },
        });
      }


}
