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
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,    // ← no usar en produccion
      logging: true,
    }),
    UsuariosModule,
    SolicitudesModule,
    ReservasModule,
    PrestamosModule,
    RecursosModule,
    ValoracionesModule,
    HorariosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
