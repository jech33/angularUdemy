import { Component } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})
export class ContactoComponent{
    public titulo = "Página de contacto";
    public parametro = "";

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
            console.log(params);
        })
    }

    redirigir() {
        this._router.navigate(['/contacto', '@jech33 on github'])
    }
}