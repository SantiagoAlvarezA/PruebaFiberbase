import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class PersonsService {
    // persons:any = [
    //     {id: 1, nombre: 'Jonathan', apellido: 'Mideros', correo: 'jonmid.mideros@gmail.com', descripcion: 'Estos son mis datos personales'},
    //     {id: 2, nombre: 'Sandra', apellido: 'Gonzalez', correo: 'sandra@hotmail.com', descripcion: 'Estos son mis datos personales'},
    //     {id: 3, nombre: 'Carlos', apellido: 'Mosquera', correo: 'carlitos@gmail.com', descripcion: 'Estos son mis datos personales'},
    //     {id: 4, nombre: 'Elizabeth', apellido: 'Gonzalez', correo: 'eliza@hotmail.com', descripcion: 'Estos son mis datos personales'},
    //     {id: 5, nombre: 'Samuel', apellido: 'Mideros', correo: 'sami@gmail.com', descripcion: 'Estos son mis datos personales'},
    //     {id: 6, nombre: 'Dayana', apellido: 'Contreras', correo: 'dayis@hotmail.com', descripcion: 'Estos son mis datos personales'}
    // ];

    constructor(private db:AngularFireDatabase) { }


    public createPerson(person) {
        this.db.database.ref('personas/'+person.id).set(person);
        // this.db.database.ref('personas/').set(person);
    }

    public getPersons() {
        return this.db.list('personas').valueChanges();
        }
}
