import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ClientesService } from './clientes.services';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  obtenerClientes() {
    return this.clientesService.obtenerTodos();
  }

  @Get(':id')
  obtenerClientePorId(@Param('id') id: string) {
    return this.clientesService.obtenerPorId(Number(id));
  }

  @Post()
  crearCliente(@Body() body: any) {
    return this.clientesService.crear(body);
  }

  @Patch(':id')
  actualizarCliente(@Param('id') id: string, @Body() body: any) {
    return this.clientesService.actualizar(Number(id), body);
  }

  @Delete(':id')
  eliminarCliente(@Param('id') id: string) {
    return this.clientesService.eliminar(Number(id));
  }
}

Get()(ClientesController.prototype, 'obtenerClientes', Object.getOwnPropertyDescriptor(ClientesController.prototype, 'obtenerClientes')!);