import { Module } from '@nestjs/common';
import { RecursosController } from './recursos.controller';
import { RecursosService } from './recursos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recurso } from './recursos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recurso])],
  controllers: [RecursosController],
  providers: [RecursosService],
  exports: [RecursosService],
})
export class RecursosModule {}
