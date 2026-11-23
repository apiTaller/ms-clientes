import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
export declare class ClientesService {
    private readonly clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    obtenerTodos(): Promise<Cliente[]>;
    obtenerPorId(id: number): Promise<Cliente>;
    crear(nuevoCliente: Partial<Cliente>): Promise<Cliente>;
    actualizar(id: number, datosActualizados: Partial<Cliente>): Promise<Cliente>;
    eliminar(id: number): Promise<{
        mensaje: string;
        eliminado: Cliente;
    }>;
}
