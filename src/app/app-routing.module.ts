import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './guards/auth.guard'
import { CarrosComponent } from './components/carros/carros.component';

const routes: Routes = [

  // App routes goes here here
  { 
    path: 'sistemasdecarros',    
    canActivate: [AuthGuard], 
    children: [
      { path: 'cliente', component: ClienteComponent},
      { path: 'carros', component: CarrosComponent},
    ]
  },  
  
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
