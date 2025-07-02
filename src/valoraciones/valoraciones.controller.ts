import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ValoracionesService } from './valoraciones.service';
import { CreateValoracionDto } from './dto/createValoracionDto';
import { Valoracion } from './valoraciones.entity';

@Controller('valoraciones')
export class ValoracionesController {
  constructor(private readonly svc: ValoracionesService) {}

  @Post()
  async create(
    @Body() dto: CreateValoracionDto,
  ): Promise<Valoracion> {
    return this.svc.create(dto);
  }
  @Get('reserva/:id')
  async byReserva(
    @Param('id') id: string,
  ): Promise<Valoracion[]> {
    return this.svc.findByReserva(+id);
  }
  @Get('usuario/:ident')
  async byUsuario(
    @Param('ident') ident: string,
  ): Promise<Valoracion[]> {
    return this.svc.findByUsuario(+ident);
  }
}
