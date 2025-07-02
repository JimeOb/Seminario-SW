import { IsInt, IsDateString, IsString } from 'class-validator';

export class CrearReservaDto {
  @IsInt()
  idRecurso: number;

  @IsInt()
  identificacionUsuario: number;

  @IsDateString()
  fecha: string;       // <-- ahora es string

  @IsDateString()
  horaInicio: string;  // <-- idem

  @IsDateString()
  horaFinal: string;   // <-- idem

  @IsString()
  estadoReserva: string;
  idReserva: number | undefined;
}