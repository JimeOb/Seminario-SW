import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { ReservasModule } from './reservas/reservas.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { RecursosModule } from './recursos/recursos.module';
import { ValoracionesModule } from './valoraciones/valoraciones.module';
import { HorariosModule } from './horarios/horarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'host',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
      username: process.env.DB_USERNAME || 'usuario',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Nota: No usar en producción
    }),
    UsuariosModule,
    SolicitudesModule,
    ReservasModule,
    PrestamosModule,
    RecursosModule,
    ValoracionesModule,
    HorariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
