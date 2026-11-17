import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientesService {
  private clientes: { id: number; nombre: string; direccion?: string; localidad?: string; provincia?: string }[] = [
  { id: 1, nombre: 'Restaurante El Buen Sabor', direccion: 'Calle Mayor 12', localidad: 'Madrid', provincia: 'Madrid' },
  { id: 2, nombre: 'Cafetería Central', direccion: 'Plaza España 5', localidad: 'Toledo', provincia: 'Toledo' },
];

  obtenerTodos() {
    return this.clientes;
  }

  obtenerPorId(id: number) {
    const cliente = this.clientes.find(c => c.id === id);
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return cliente;
  }

  crear(nuevoCliente: { nombre: string; direccion?: string; localidad?: string; provincia?: string }) {
    const id = this.clientes.length > 0 ? this.clientes[this.clientes.length - 1].id + 1 : 1;
    const clienteConId = { id, ...nuevoCliente };
    this.clientes.push(clienteConId);
    return clienteConId;
  }

  actualizar(id: number, datosActualizados: any) {
    const cliente = this.obtenerPorId(id);
    Object.assign(cliente, datosActualizados);
    return cliente;
  }

  eliminar(id: number) {
    const index = this.clientes.findIndex(c => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    const eliminado = this.clientes.splice(index, 1);
    return { mensaje: `Cliente con ID ${id} eliminado correctamente`, eliminado: eliminado[0] };
  }
}