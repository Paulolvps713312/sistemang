import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteComponent } from './components/painel/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireAuth } from '@angular/fire/auth';

import { AuthGuard } from './components/guards/auth.guard';

import { LoginService } from './components/login/login.service';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/navbar/navbar.component';
import { CarroComponent } from './components/painel/carro/carro.component';
import { LeilaoComponent } from './components/painel/leilao/leilao.component';
import { PainelComponent } from './components/painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    PainelComponent,
    CarroComponent,
    ClienteComponent,
    LeilaoComponent,
    LoginComponent
  ],
  providers: [AuthGuard, LoginService, AngularFireModule, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
