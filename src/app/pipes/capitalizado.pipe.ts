import { Pipe, PipeTransform } from '@angular/core';
//nombre a usar en el html
@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {

    //transform metodo de la interfaz que se debe ocupar para trasformar el pipe
    transform(value: string): string {

        //value es el valor a trasformar
        value = value.toLowerCase();

        //separar las palabras
        let names  = value.split(' ');

        // tslint:disable-next-line: forin
        for (const i in names) {

            //la primera letra en mayuscula
            names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
        return names.join(' ');

    }
}