import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-add',
  templateUrl: './livro-add.component.html',
  styleUrls: ['./livro-add.component.scss']
})

export class LivroAddComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  createForm(livro: Livro){
    this.form = new FormGroup({
      livro: new FormControl(livro.livro)
    })    
  }

  ngOnInit(): void {
    this.createForm(new Livro())
  }

}
