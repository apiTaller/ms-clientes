import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  obtenerTodos() {
    return this.clienteRepository.find();
  }

  async obtenerPorId(id: number) {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return cliente;
  }

  async crear(nuevoCliente: Partial<Cliente>) {
    const entidad = this.clienteRepository.create(nuevoCliente);
    return this.clienteRepository.save(entidad);
  }

  async actualizar(id: number, datosActualizados: Partial<Cliente>) {
    const cliente = await this.obtenerPorId(id);
    Object.assign(cliente, datosActualizados);
    return this.clienteRepository.save(cliente);
  }

  async eliminar(id: number) {
    const cliente = await this.obtenerPorId(id);
    const eliminado = await this.clienteRepository.remove(cliente);
    return {
      mensaje: `Cliente con ID ${id} eliminado correctamente`,
      eliminado,
    };
  }
}