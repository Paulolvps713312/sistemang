import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { Cliente } from './cliente.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [ClienteComponent]
})

export class ClienteComponent implements OnInit {

    cliente: Cliente;
    clientesRef: AngularFireList<any>;
    clientes: any[];

    constructor(private db: AngularFireDatabase) { }

    ngOnInit(): void {
        this.cliente = new Cliente();
        this.listar();
    }

    salvar() {
        if (this.cliente.key == null) {
            this.db.list('clientes').push(this.cliente)
                .then((result: any) => {
                    console.log(result.key);
                });
        } else {
            this.db.list('clientes').update(this.cliente.key, this.cliente)
            .then((result: any) => {
                console.log(result.key);
            });
        }
    }

    carregar(cliente: Cliente) {
        this.cliente = new Cliente(cliente.key,
            cliente.nome, cliente.dataNascimento);
    }

    excluir(key: string) {
        if (confirm('Deseja realmente excluir?')) {
            this.db.list('clientes').remove(key)
                .then((result: any) => {
                    console.log(key);
                });
        }
    }

    listar() {
        this.getAll().subscribe(
            clientes => this.clientes = clientes,
            error => alert(error),
            () => console.log('terminou')
          );
    }

    getAll(): Observable<any[]> {
        return this.db.list('clientes')
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map(c => (
                  { key: c.payload.key, ...c.payload.val() }));
            })
          );
      }


}
