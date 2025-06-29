import { Module } from '@nestjs/common';
import { ValoracionesController } from './valoraciones.controller';
import { ValoracionesService } from './valoraciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valoracion } from './valoraciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Valoracion])], // Aquí puedes agregar tus entidades si las tienes
  controllers: [ValoracionesController],
  providers: [ValoracionesService]
})
export class ValoracionesModule {}
