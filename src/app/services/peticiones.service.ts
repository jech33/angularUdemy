import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpResponse, HttpRequest, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class PeticionesService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba() {
        return 'Hola mundo desde el servicio.';
    }

    getArticulos() {
        const request = this._http.get(
            this.url,
            {
                observe: 'body',
                responseType: 'json',
            }
        )
        return new Promise((resolve, reject) => {
            request.pipe(map((res) => res)).subscribe({
                next(obs) { resolve(obs) },
                error(err) { reject(err) }
            });

            //   request.pipe(map((res) => res))
        })
    }
}
