import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.services';

@Module({
  imports: [],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class AppModule {}