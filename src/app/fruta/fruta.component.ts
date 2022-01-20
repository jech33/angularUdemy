import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
})

export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Manzana, pera y sandía';

    public nombre: string;
    public edad: number;
    public mayorDeEdad: boolean;
    public trabajos: Array<string>;

    constructor() {
        this.nombre = 'Javier';
        this.edad = 26;
        this.mayorDeEdad = true;
        this.trabajos = ['Desarrollador', 'Ingeniero', 'Programador'];
        
    }

    ngOnInit() {
        this.cambiarNombre();
        // Variables y alcance
        
    }

    get trabajosGet() {
        const _trabajos = this.trabajos.toString();
        return _trabajos.replace(/,/g, ", ");
    }

    cambiarNombre() {
        this.nombre = "Jav"
    }
}