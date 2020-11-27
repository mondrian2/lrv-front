import { LivroService } from './../../../services/livro.service';
import { PacoteService } from './../../../services/pacote.service';
import { Pacote } from './../pacote';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pacote-edit',
  templateUrl: './pacote-edit.component.html',
  styleUrls: ['./pacote-edit.component.scss']
})
export class PacoteEditComponent implements OnInit {

  form: FormGroup;
  pacote: Observable<any>
  livros: Observable<any>
  msg: string


  constructor(private route: ActivatedRoute, private router: Router, private srv: PacoteService, private srvLivro: LivroService) { }

  createForm(pacote: Pacote){
    this.form = new FormGroup({
      titulo: new FormControl(pacote.titulo),
      livro_id: new FormControl(pacote.livro_id)
    })    
    console.log(this.form.value.livro_id)
  }

  updateForm(data) {
    console.log(data)
    this.form.patchValue({
      titulo: data.titulo,
      livro_id: data.id
    });
  }

  onSubmit(){
    this.srv.update(this.route.snapshot.paramMap.get('id'), this.form.value)
    .subscribe(r => this.msg = "Atualizado com sucesso")
  }

  ngOnInit(): void {
    this.createForm(new Pacote())
    this.pacote = this.srv.get(this.route.snapshot.paramMap.get('id'));
    this.pacote.subscribe(r => this.updateForm(r))

    this.livros = this.srvLivro.getAll()
    // this.livro.subscribe(r => this.updateForm(r))
  }

}
