import { Luchador } from './luchador.js';
import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public sumision: number,
        public amo: Luchador
    ) {
        super(nombre, familia, edad, 'escudero');
        this.mensaje = 'Soy un looser';
    }
}
