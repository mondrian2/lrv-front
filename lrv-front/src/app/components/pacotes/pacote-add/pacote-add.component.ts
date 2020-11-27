import { LivroService } from './../../../services/livro.service';
import { Observable } from 'rxjs';
import { PacoteService } from './../../../services/pacote.service';
import { Component, OnInit } from '@angular/core';
import { Pacote } from '../pacote';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacote-add',
  templateUrl: './pacote-add.component.html',
  styleUrls: ['./pacote-add.component.scss']
})
export class PacoteAddComponent implements OnInit {

  form: FormGroup
  msg: string
  livros: Observable<any>

  constructor(private srv: PacoteService, private srvLivros: LivroService, private route: Router) { }

  createForm(pacote: Pacote){
    this.form = new FormGroup({
      titulo: new FormControl(pacote.titulo),
      livro_id: new FormControl(pacote.livro_id)
    })    
  }  

  success(){
    this.msg = "Gravado com sucesso"
    this.limpaForm()
    this.removeMsg()
  }

  limpaForm(){
    this.form.patchValue({
      titulo: '',
      livro_id: ''
    });
  }

  removeMsg(){
    setTimeout(()=>{
      this.msg = null;
    }, 2000);
  }

  goList() {
    this.route.navigate(['pacote-list'])
  }

  onSubmit(){
    this.srv.create(this.form.value)
    .subscribe(r => this.success())
  }

  ngOnInit(): void {
    this.createForm(new Pacote())
    this.livros = this.srvLivros.getAll()
  }

}
