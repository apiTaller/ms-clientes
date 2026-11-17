export declare class ClientesService {
    private clientes;
    obtenerTodos(): {
        id: number;
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
    }[];
    obtenerPorId(id: number): {
        id: number;
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
    };
    crear(nuevoCliente: {
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
    }): {
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
        id: number;
    };
    actualizar(id: number, datosActualizados: any): {
        id: number;
        nombre: string;
        direccion?: string;
        localidad?: string;
        provincia?: string;
    };
    eliminar(id: number): {
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
