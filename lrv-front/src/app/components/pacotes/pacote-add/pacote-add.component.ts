import { LivroService } from './../../../services/livro.service';
import { Observable } from 'rxjs';
import { PacoteService } from './../../../services/pacote.service';
import { Component, OnInit } from '@angular/core';
import { Pacote } from '../pacote';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pacote-add',
  templateUrl: './pacote-add.component.html',
  styleUrls: ['./pacote-add.component.scss']
})
export class PacoteAddComponent implements OnInit {

  form: FormGroup
  msg: string
  livros: Observable<any>

  constructor(private srv: PacoteService, private srvLivros: LivroService) { }

  createForm(pacote: Pacote){
    this.form = new FormGroup({
      titulo: new FormControl(pacote.titulo),
      livro_id: new FormControl(pacote.livro_id)
    })    
  }  

  onSubmit(){
    this.srv.create(this.form.value)
    .subscribe(r => this.msg = "Gravado com sucesso")
  }

  ngOnInit(): void {
    this.createForm(new Pacote())
    this.livros = this.srvLivros.getAll()
  }

}
