import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Leilao } from './leilao.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-leilao',
  templateUrl: './leilao.component.html',
  styleUrls: ['./leilao.component.css']
})

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [LeilaoComponent]
})

export class LeilaoComponent implements OnInit {

    leilao: Leilao;
    leilaoRef: AngularFireList<any>;
    leiloes: any[];

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.leilao = new Leilao();
        this.listar();
    }

    salvar() {
      if (this.leilao.key == null) {
          this.db.list('leiloes').push(this.leilao)
              .then((result: any) => {
                  console.log(result.key);
              });
      } else {
          this.db.list('leiloes').update(this.leilao.key, this.leilao)
          .then((result: any) => {
              console.log(result.key);
          });
      }
  }

  carregar(leilao: Leilao) {
    this.leilao = new Leilao(leilao.key,
        leilao.data, leilao.local);
  }

  excluir(key: string) {
    if (confirm('Deseja realmente excluir?')) {
        this.db.list('leiloes').remove(key)
            .then((result: any) => {
                console.log(key);
            });
    }
  }

  listar() {
    this.getAll().subscribe(
        leiloes => this.leiloes = leiloes,
        error => alert(error),
        () => console.log('terminou')
      );
}

  getAll(): Observable<any[]> {
    return this.db.list('leiloes')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => (
              { key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

}
