import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatosService } from '../contatos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contato } from '../contatos/contatos.model';

@Component({
  selector: 'app-cadastro-editar',
  templateUrl: './cadastro-editar.component.html',
  styleUrls: ['./cadastro-editar.component.css']
})
export class CadastroEditarComponent implements OnInit {

  public formData = new FormData();
  uploadForm!: any;     
  contato: Contato = new Contato();
  public id_contato :any;
  
  constructor(
    private contatosService: ContatosService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.id_contato = id;
      
      this.contatosService.listarContatosPorId(id).subscribe(resultado => {                       
        
        this.contato.nome = resultado.nome,
        this.contato.numero = resultado.numero
        this.contato.foto = resultado.foto
        
        this.uploadForm = this.formBuilder.group({
          profile: resultado.foto,
          nome: resultado.nome,
          numero: resultado.numero
        });        

      }, err => {
        console.log(err);
        this.contatosService.alertaErro("Erro", "Erro ao buscar contato no servidor");
      })           

    });

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
  


  editarContato(){                   
    this.formData.append('nome', this.contato.nome);
    this.formData.append('numero', this.contato.numero);    
    this.contatosService.alterarContato(this.id_contato, this.formData).subscribe(resultado => {            
      this.uploadForm.get('nome').setValue('');
      this.uploadForm.get('numero').setValue('');
      this.contatosService.alertaSucesso("Editado com sucesso", "")
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
      this.contatosService.alertaErro("Erro ao editar o contato", "");
    })    
  }

}
