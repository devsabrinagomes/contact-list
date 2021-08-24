import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HttpClientModule } from '@angular/common/http';
import { ContatosService } from './contatos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroEditarComponent } from './cadastro-editar/cadastro-editar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    CadastroComponent,
    CadastroEditarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,        
    FormsModule,
    ReactiveFormsModule,  
    FontAwesomeModule  
  ],
  providers: [ContatosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
