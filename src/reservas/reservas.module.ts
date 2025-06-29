import { Module } from '@nestjs/common';
import { ReservasController } from './reservas.controller';
import { ReservasService } from './reservas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './reservas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva])], // Aquí puedes agregar tus entidades si las tienes
  controllers: [ReservasController],
  providers: [ReservasService]
})
export class ReservasModule {}
