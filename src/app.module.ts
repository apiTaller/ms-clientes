import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.services';
import { Cliente } from './entities/cliente.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // tu usuario de MySQL
      password: '', // tu contraseña de MySQL
      database: 'api_restaurante_clientes', // nombre de tu base de datos en MySQL
      entities: [Cliente],
      synchronize: true, // crea/actualiza tablas automáticamente en desarrollo
    }),
    TypeOrmModule.forFeature([Cliente]),
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class AppModule {}