import { IsInt, Min, Max, IsOptional, IsString } from 'class-validator';

export class CreateValoracionDto {
  @IsInt()
  identificacionUsuario: number;

  @IsInt()
  reservaId: number;

  @IsInt()
  @Min(1)
  @Max(5)
  estrellas: number;

  @IsOptional()
  @IsString()
  comentario?: string;
    fechaValoracion: string;
}