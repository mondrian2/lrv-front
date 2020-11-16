import { LivroService } from './../../../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-add',
  templateUrl: './livro-add.component.html',
  styleUrls: ['./livro-add.component.scss']
})

export class LivroAddComponent implements OnInit {

  form: FormGroup
  msg: string

  constructor(private srv: LivroService) { }

  createForm(livro: Livro){
    this.form = new FormGroup({
      titulo: new FormControl(livro.titulo)
    })    
  }

  onSubmit(){
    this.srv.create(this.form.value)
    .subscribe(r => this.msg = "Gravado com sucesso")
  }

  ngOnInit(): void {
    this.createForm(new Livro())
  }

}
