"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
let ClientesService = class ClientesService {
    constructor() {
        this.clientes = [
            { id: 1, nombre: 'Restaurante El Buen Sabor', direccion: 'Calle Mayor 12', localidad: 'Madrid', provincia: 'Madrid' },
            { id: 2, nombre: 'Cafetería Central', direccion: 'Plaza España 5', localidad: 'Toledo', provincia: 'Toledo' },
        ];
    }
    obtenerTodos() {
        return this.clientes;
    }
    obtenerPorId(id) {
        const cliente = this.clientes.find(c => c.id === id);
        if (!cliente) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return cliente;
    }
    crear(nuevoCliente) {
        const id = this.clientes.length > 0 ? this.clientes[this.clientes.length - 1].id + 1 : 1;
        const clienteConId = { id, ...nuevoCliente };
        this.clientes.push(clienteConId);
        return clienteConId;
    }
    actualizar(id, datosActualizados) {
        const cliente = this.obtenerPorId(id);
        Object.assign(cliente, datosActualizados);
        return cliente;
    }
    eliminar(id) {
        const index = this.clientes.findIndex(c => c.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        const eliminado = this.clientes.splice(index, 1);
        return { mensaje: `Cliente con ID ${id} eliminado correctamente`, eliminado: eliminado[0] };
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)()
], ClientesService);
//# sourceMappingURL=clientes.services.js.map