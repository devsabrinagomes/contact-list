import { CadastroEditarComponent } from './cadastro-editar/cadastro-editar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "",  component: ContatosComponent }, 
  { path: "cadastrar", component: CadastroComponent},  
  { path: "editar/:id", component: CadastroEditarComponent},  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
