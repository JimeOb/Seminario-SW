import { Module } from '@nestjs/common';
import { SolicitudesController } from './solicitudes.controller';
import { SolicitudesService } from './solicitudes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitud } from './solicitudes.entity';
import { ReservasModule } from 'src/reservas/reservas.module';
import { RecursosModule } from 'src/recursos/recursos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Solicitud]),
    ReservasModule,     // ← aquí
    RecursosModule,     // ← y aquí
  ],
  providers: [SolicitudesService],
  controllers: [SolicitudesController],
})
export class SolicitudesModule {}
