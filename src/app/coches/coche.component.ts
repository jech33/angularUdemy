import { Component } from "@angular/core";
import { PeticionesService } from "../services/peticiones.service";
import { Coche } from "./coche";
import { lastValueFrom, Observable, of } from 'rxjs';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent {
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos: any;

    constructor(
        private _peticionesService: PeticionesService
    ) {
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Seat Panda", "120", "Blanco"),
            new Coche("Renault Clio", "110", "Azul")
        ]
    }

    async ngOnInit() {
        console.log(this._peticionesService.getPrueba());
        const api: any = await this._peticionesService.getArticulos()
            .then((obs: any) => obs)
            .catch(err => err)


        this.articulos = api;
        console.log(api)
        console.log("Prueba")

        // const response = await lastValueFrom(this._peticionesService.getArticulos());
        // const responsePromise = await new Promise((resolve, reject) => {
        //     const obs = this._peticionesService.getArticulos()
        //         .subscribe((data: any) => {
        //             return (data)
        //         });

        //     if (obs) {
        //         resolve(lastValueFrom(this._peticionesService.getArticulos()))
        //     }
        //     else {
        //         reject("No data")
        //     }
        // })
        // console.log(responsePromise)
        // console.log(response);
    }

    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coche("", "", "");
    }

}