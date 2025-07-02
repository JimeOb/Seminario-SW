import { IsEnum } from 'class-validator';
import { SolicitudEstado } from '../solicitudes.entity'; 

export class UpdateSolicitudDto {
  @IsEnum(['ACEPTADA','RECHAZADA'])
  estado: SolicitudEstado;
}