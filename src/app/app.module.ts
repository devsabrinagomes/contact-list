import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HttpClientModule } from '@angular/common/http';
import { ContatosService } from './contatos.service';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {OrderListModule} from 'primeng/orderlist';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import { CadastroComponent } from './cadastro/cadastro.component';
import {DialogModule} from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,    
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    OrderListModule,
    CardModule,
    MenubarModule,  
    ButtonModule,
    DataViewModule,
    DialogModule, 
  ],
  providers: [ContatosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
