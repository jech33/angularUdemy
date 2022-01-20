import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent{
    public titulo = "Página principal";
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;
    public fecha:Date;
    public nombre:string = "Jordan Walke";

    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date()
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
        console.log(this._ropaService.prueba());
    }

    guardarPrenda(){
        this.listado_ropa.push(this.prenda_a_guardar);
    }

    eliminarPrenda(index:number){
        this.listado_ropa.splice(index, 1);
    }
}