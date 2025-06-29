import { Module } from '@nestjs/common';
import { SolicitudesController } from './solicitudes.controller';
import { SolicitudesService } from './solicitudes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from './solicitudes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitud])], // Aquí puedes agregar tus entidades si las tienes
  controllers: [SolicitudesController],
  providers: [SolicitudesService]
})
export class SolicitudesModule {}
