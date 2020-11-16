import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Livro } from '../livro';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livro-edit',
  templateUrl: './livro-edit.component.html',
  styleUrls: ['./livro-edit.component.scss']
})
export class LivroEditComponent implements OnInit {
  
  form: FormGroup;
  livro: Observable<any>
  msg: string


  constructor(private route: ActivatedRoute, private router: Router, private srv: LivroService) { }

  createForm(livro: Livro){
    this.form = new FormGroup({
      titulo: new FormControl(livro.titulo)
    })    
  }

  updateForm(data) {
    this.form.patchValue({
      titulo: data.titulo
    });
  }

  onSubmit(){
    this.srv.update(this.route.snapshot.paramMap.get('id'), this.form.value)
    .subscribe(r => this.msg = "Atualizado com sucesso")
  }

  ngOnInit(): void {
    this.createForm(new Livro())
    this.livro = this.srv.get(this.route.snapshot.paramMap.get('id'));
    this.livro.subscribe(r => this.updateForm(r))
  }

}
