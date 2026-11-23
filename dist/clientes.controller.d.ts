import { ClientesService } from './clientes.services';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    obtenerClientes(): Promise<import("./entities/cliente.entity").Cliente[]>;
    obtenerClientePorId(id: string): Promise<import("./entities/cliente.entity").Cliente>;
    crearCliente(body: any): Promise<import("./entities/cliente.entity").Cliente>;
    actualizarCliente(id: string, body: any): Promise<import("./entities/cliente.entity").Cliente>;
    eliminarCliente(id: string): Promise<{
        mensaje: string;
        eliminado: import("./entities/cliente.entity").Cliente;
    }>;
}
