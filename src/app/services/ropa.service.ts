import { Injectable } from "@angular/core";



@Injectable()
export class RopaService{

    public nombre_prenda = 'Pantalones vaqueros';
    public coleccion_ropa = ['Pantalones Blancos', 'Camiseta Roja'];

    prueba(){
        return this.nombre_prenda;
    }

    addRopa(nombre_prenda: string){
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    getRopa(){
        return this.coleccion_ropa;
    }
}