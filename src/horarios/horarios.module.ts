import { Module } from '@nestjs/common';
import { HorariosController } from './horarios.controller';
import { HorariosService } from './horarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horario } from './horarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Horario])], // Aquí puedes agregar tus entidades si las tienes
  controllers: [HorariosController],
  providers: [HorariosService]
})
export class HorariosModule {}
