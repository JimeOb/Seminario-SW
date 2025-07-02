import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Solicitud} from './solicitudes.entity';
import { Repository } from 'typeorm';
import { UpdateSolicitudDto } from './dto/updateSolicitudes'; 
import { ReservasService } from '../reservas/reservas.service';
import { RecursosService } from '../recursos/recursos.service';

@Injectable()
export class SolicitudesService {
  constructor(
    @InjectRepository(Solicitud)
    private readonly repo: Repository<Solicitud>,
    private readonly reservasService: ReservasService,
    private readonly recursosService: RecursosService,
  ) {}

  async changeEstado(
    id: number,
    dto: UpdateSolicitudDto,
  ): Promise<Solicitud> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const sol = await this.repo.findOne({
      where: { idSolicitud: id },
      relations: ['recurso','usuario'],
    });
    if (!sol) throw new NotFoundException(`Solicitud ${id} no existe`);
    if (sol.estado !== 'PENDIENTE') {
      throw new BadRequestException(`Sólo PENDIENTE puede procesarse`);
    }

    // Rechazar
    if (dto.estado === 'RECHAZADA') {
      sol.estado = 'RECHAZADA';
      return this.repo.save(sol);
    }

    if (dto.estado === 'ACEPTADA') {
      await this.reservasService.crearReserva({
        idRecurso: sol.recurso.idRecurso,
        identificacionUsuario: sol.usuario.identificacionUsuario,
        fecha: sol.fecha,
        horaInicio: sol.fecha,
        horaFinal: sol.fecha, 
        estadoReserva: 'ACTIVA',
        idReserva: undefined
      });
      await this.recursosService.actualizarDisponibilidad(
        sol.recurso.idRecurso,
        false,
      );
      sol.estado = 'ACEPTADA';
      return this.repo.save(sol);
    }

    return sol;
  }
}
