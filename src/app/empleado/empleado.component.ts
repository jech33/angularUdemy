import { Component } from "@angular/core";
import { Empleado } from "./empleado";


@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente empleados';
    public empleado:Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;
    public color: string;
    public color_seleccionado: string;

    constructor() {
        this.empleado = new Empleado('Javier', 26, 'Desarrollador', true);
        this.trabajadores = [
            new Empleado('Kevin', 26, 'Ingeniero', true),
            new Empleado('William', 35, 'Profesor', true),
            new Empleado('John', 42, 'Administrativo', true),
        ];
        this.trabajador_externo = false;
        this.color = '#009fe3';
        this.color_seleccionado = '#ccc';
    }

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor:boolean){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado)
    }
    
}