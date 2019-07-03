import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class LoginService {

    user: Observable<firebase.User>;

    constructor(private router: Router, public afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
    }

    public login(mail: string, password: string) {

        return new Promise((resolve, reject) => {

            this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user) => {

                localStorage.token = mail;
                this.router.navigate(['/painel']);
                console.log(user);

            })
                .catch((error) => {
                    console.log(error);
                    this.router.navigate(['/entrar']);
                });
        })
            .catch((error) => {
                console.log(error);
                this.router.navigate(['/entrar']);
            });
    }

    public logout() {
        return this.afAuth.auth.signOut();
    }


}
