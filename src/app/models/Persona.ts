import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

export class Persona {

    constructor(
        public nombre: String,
        public apellido: String,
        public mayorEdad: Boolean
    ) { }

}