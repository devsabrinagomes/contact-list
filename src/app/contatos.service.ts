import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contato } from './contatos/contatos.model';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  
  constructor(private http: HttpClient) { }

  options = { 
    headers: { 'Content-Type': 'multipart/form-data' } 
  } ;

  listarContatos(): Observable<any>{
    return this.http.get("http://127.0.0.1:8000/contatos/");
  }

  deletarContato(id:any) {
    return this.http.delete("http://127.0.0.1:8000/contatos/"+id+"/")
  }

  cadastrarContato(contato: any) {    
    return this.http.post("http://127.0.0.1:8000/contatos/", contato);
  }

  alterarContato(id:any, dados:any) {    
    return this.http.put("http://127.0.0.1:8000/contatos/"+id+"/", dados);
  }


}
