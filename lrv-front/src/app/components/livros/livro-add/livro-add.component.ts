import { LivroService } from './../../../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Livro } from '../livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-add',
  templateUrl: './livro-add.component.html',
  styleUrls: ['./livro-add.component.scss']
})

export class LivroAddComponent implements OnInit {

  form: FormGroup
  msg: string
  response: any

  constructor(private srv: LivroService, private route: Router) { }

  createForm(livro: Livro){
    this.form = new FormGroup({
      titulo: new FormControl(livro.titulo)
    })    
  }

  onSubmit(){
    this.srv.create(this.form.value)
    .subscribe(r => this.success())
  }

  success(){
    this.msg = "Gravado com sucesso"
    this.limpaForm()
    this.removeMsg()
  }

  limpaForm(){
    this.form.patchValue({
      titulo: ''
    });
  }

  removeMsg(){
    setTimeout(()=>{
      this.msg = null;
    }, 2000);
  }

  goList() {
    this.route.navigate(['livro-list'])
  }

  ngOnInit(): void {
    this.createForm(new Livro())
  }

}
