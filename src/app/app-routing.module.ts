import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './components/painel/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';
import { CarroComponent } from './components/painel/carro/carro.component';
import { LeilaoComponent } from './components/painel/leilao/leilao.component';

const routes: Routes = [

  // App routes goes here here
  {
    path: 'painel',
    canActivate: [AuthGuard],
    children: [
      { path: 'clientes', component: ClienteComponent},
      { path: 'carros', component: CarroComponent},
      { path: 'leiloes', component: LeilaoComponent},
    ]
  },

  { path: 'entrar', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
