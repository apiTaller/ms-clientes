import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.services';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432,
      username: 'postgres', 
      password: 'pwdclientesdb', 
      database: 'clientesdb', 
      entities: [Cliente],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cliente]),
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class AppModule {}