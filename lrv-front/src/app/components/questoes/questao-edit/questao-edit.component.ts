import { Questao } from './../questao';
import { QuestaoService } from './../../../services/questao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questao-edit',
  templateUrl: './questao-edit.component.html',
  styleUrls: ['./questao-edit.component.scss']
})
export class QuestaoEditComponent implements OnInit {

  form: FormGroup;
  questao: Observable<any>
  msg: string


  constructor(private route: ActivatedRoute, private router: Router, private srv: QuestaoService) { }

  createForm(questao: Questao){
    this.form = new FormGroup({
      enunciado: new FormControl(questao.enunciado),
      tipo: new FormControl(questao.tipo),
      comentario: new FormControl(questao.comentario),
      peso: new FormControl(questao.peso),
      pacote_id: new FormControl(questao.pacote_id)
    })    
  }  

  updateForm(data) {
    this.form.patchValue({
      enunciado: data.enunciado,
      tipo: data.tipo,
      comentario: data.comentario,
      peso: data.peso,
      pacote_id: data.pacote_i
    });
  }

  onSubmit(){
    this.srv.update(this.route.snapshot.paramMap.get('id'), this.form.value)
    .subscribe(r => this.msg = "Atualizado com sucesso")
  }

  ngOnInit(): void {
    this.createForm(new Questao())
    this.questao = this.srv.get(this.route.snapshot.paramMap.get('id'));
    this.questao.subscribe(r => this.updateForm(r))
  }

}
