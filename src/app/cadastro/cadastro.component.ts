import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import { FormControl, Validators} from '@angular/forms';
import { Contato } from '../contatos/contatos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  contato: Contato = new Contato();
  uploadedFiles: any[] = [];
  uploadForm!: any;      
  public formData = new FormData();

  constructor(private contatosService: ContatosService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {


    this.uploadForm = this.formBuilder.group({
      profile: '',
      nome:'',
      numero: ''
    });
  }

  cadastrarContato(){                
   
    this.formData.append('nome', this.contato.nome)
    this.formData.append('numero', this.contato.numero)
    this.contatosService.cadastrarContato(this.formData).subscribe(resultado => {            
      this.limparCampos();
      this.router.navigate(['/']);
      this.contatosService.alertaSucesso("Contato Cadastrado com Sucesso", "");
    }, err => {
      console.log(err);
      this.contatosService.alertaErro("Erro", "Erro ao salvar");
    })    
  }

  onFileSelect(event:any) {
    const reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const file = <File>event.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.formData.append('foto', file, file.name);
      }
    }
  }

  limparCampos() {
    this.uploadForm.get('nome').setValue('')
    this.uploadForm.get('numero').setValue('')
  }



}
