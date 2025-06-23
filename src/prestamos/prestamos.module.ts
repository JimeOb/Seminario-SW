import { Module } from '@nestjs/common';
import { PrestamosController } from './prestamos.controller';
import { PrestamosService } from './prestamos.service';

@Module({
  controllers: [PrestamosController],
  providers: [PrestamosService]
})
export class PrestamosModule {}
