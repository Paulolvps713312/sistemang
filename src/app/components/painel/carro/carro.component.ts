import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Carro } from './carro.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
})

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [CarroComponent]
})

export class CarroComponent implements OnInit {

    carro: Carro;
    carroRef: AngularFireList<any>;
    carros: any[];

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.carro = new Carro();
        this.listar();
    }

    salvar() {
      if (this.carro.key == null) {
          this.db.list('carros').push(this.carro)
              .then((result: any) => {
                  console.log(result.key);
              });
      } else {
          this.db.list('carros').update(this.carro.key, this.carro)
          .then((result: any) => {
              console.log(result.key);
          });
      }
  }

  carregar(carro: Carro) {
    this.carro = new Carro(carro.key,
        carro.modelo, carro.ano);
  }

  excluir(key: string) {
    if (confirm('Deseja realmente excluir?')) {
        this.db.list('carros').remove(key)
            .then((result: any) => {
                console.log(key);
            });
    }
  }

  listar() {
    this.getAll().subscribe(
        carros => this.carros = carros,
        error => alert(error),
        () => console.log('terminou')
      );
}

  getAll(): Observable<any[]> {
    return this.db.list('carros')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => (
              { key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

}
