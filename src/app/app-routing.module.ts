import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './components/painel/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';
import { CarroComponent } from './components/painel/carro/carro.component';
import { LeilaoComponent } from './components/painel/leilao/leilao.component';
import { PainelComponent } from './components/painel/painel.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [

  // App routes goes here here
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'painel', component: PainelComponent },
      { path: 'painel/clientes', component: ClienteComponent },
      { path: 'painel/carros', component: CarroComponent },
      { path: 'painel/leiloes', component: LeilaoComponent },
    ]
  },

  { path: 'entrar', component: LoginComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
