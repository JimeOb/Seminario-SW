import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { RecursosService } from './recursos.service';
import { CrearRecursoDto } from './dto/crearRecurso.dto';
import { GetRecursosFilterDto } from './dto/recursosFilter.dto';
import { Recurso } from './recursos.entity';

@Controller('recursos')
export class RecursosController {
    constructor(private servicioRecurso: RecursosService){}

    @Post()
    crearRecurso(@Body() recurso: CrearRecursoDto) {
        return this.servicioRecurso.crearRecurso(recurso);
    }

    @Get()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  // eslint-disable-next-line @typescript-eslint/require-await
  async findAll(
    @Query() filterDto: GetRecursosFilterDto,
  ): Promise<Recurso[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.servicioRecurso.findAll(filterDto);
  }
}
