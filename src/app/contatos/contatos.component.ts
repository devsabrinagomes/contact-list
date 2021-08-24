import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {  
  
  contatos: Array<any> = new Array();
  constructor(private contatosService: ContatosService, private formBuilder: FormBuilder) { }

  ngOnInit() {

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



  alertaConfirmacao(id:any){
    Swal.fire({
      title: 'Deletar',
      text: "Você deseja deletar o contato?",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.contatosService.deletarContato(id).subscribe(resultado =>{
          console.log('Apagou');
          Swal.fire(
            'Deletado!',
            'Contato Deletado.',
            'success'
          )
          this.listarContatos() 
        }, err => {
          this.contatosService.alertaErro("Erro ao deletar o contato", "");
        }
        )

        
        
      }
    })
  }

  


 





}



