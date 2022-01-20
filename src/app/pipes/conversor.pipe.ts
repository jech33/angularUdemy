import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Conversor'
})
export class ConversorPipe implements PipeTransform {
    transform(value: number, por: number) {
        const value_one = value;
        const value_two = por;

        const result = `Multiplicación -> ${value_one} * ${value_two} = ${value_one*value_two}`

        return result;
    }
}
