import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import { Contato } from './contatos.model';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contato: Contato = new Contato();
  contatos: Array<any> = new Array();
  uploadedFiles: any[] = [];
  uploadForm!: any;    
  items!: any[];
  display: boolean = false;  
  display_alterar: boolean = false;  
  public formData = new FormData();

  contato_atual = new Contato();



  

  constructor(private contatosService: ContatosService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.uploadForm = this.formBuilder.group({
      profile: [''],
      nome:'',
      numero: ''
    });

    this.items = [
      {
          label:'Novo',
          icon:'pi pi-fw pi-plus',
          command: () => {
              this.abrirJanela();
          },
      }
  ];


    this.listarContatos();
  }

 
  listarContatos(){
    this.contatosService.listarContatos().subscribe(contatos =>{
      this.contatos = contatos;
    }, err => {
      console.log('Erro ao listar os contatos', err);
    }
    )
  }


  deletarContato(id:any){
    this.contatosService.deletarContato(id).subscribe(resultado =>{
      console.log('Apagou');
      this.listarContatos() 
    }, err => {
      console.log('Erro ao deletar');
    }
    )
  }


  cadastrarContato(){                
   
    let dados = {
        'nome': this.contato.nome,
        'numero': this.contato.numero,
        'foto': this.contato.foto
    }

    this.contatosService.cadastrarContato(dados).subscribe(resultado => {
      this.listarContatos();   
      this.display = false;  
      
      this.uploadForm.get('nome').setValue('')
      this.uploadForm.get('numero').setValue('')
      this.uploadForm.get('foto').setValue('')  


    }, err => {
      console.log(err);
    })
    // console.log(this.contato)
  }

  alterarContato(){                
   
    let dados = {
        'nome': this.contato.nome,
        'numero': this.contato.numero,        
    }

    this.contatosService.alterarContato(this.contato_atual.id_contato, dados).subscribe(resultado => {
      this.listarContatos();   
      this.display_alterar = false;  
      this.uploadForm.get('nome').setValue('')
      this.uploadForm.get('numero').setValue('')  
    }, err => {
      console.log(err);
    })
    // console.log(this.contato)
  }


  onFileSelect(event:any) {
    const reader = new FileReader();
      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
        reader.onload = () => {
          const imageSrc = reader.result;
          console.log(this.uploadForm.get('profile').setValue(imageSrc))
          this.uploadForm.get('profile').setValue(imageSrc);        
        };
      }
    }


    abrirJanela() {
      this.uploadForm.get('nome').setValue('')
      this.uploadForm.get('numero').setValue('')  

      if (this.display == true) {
        this.display = false;
      }else {
          this.display = true;
      }
    }



    abrirJanelaAlterarContato(contato:any){
      this.display_alterar = true;
      this.uploadForm.get('nome').setValue(contato.nome)
      this.uploadForm.get('numero').setValue(contato.numero)

      this.contato_atual = contato
    }

}



