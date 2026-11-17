import { ClientesService } from './clientes.services';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    obtenerClientes(): {
        id: number;
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
    }[];
    obtenerClientePorId(id: string): {
        id: number;
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
    };
    crearCliente(body: any): {
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
        id: number;
    };
    actualizarCliente(id: string, body: any): {
        id: number;
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
    };
    eliminarCliente(id: string): {
        mensaje: string;
        eliminado: {
            id: number;
            nombre: string;
            direccion?: string;
            localidad?: string;
            provincia?: string;
        };
    };
}
