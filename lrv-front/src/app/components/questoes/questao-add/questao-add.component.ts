import { QuestaoService } from 'src/app/services/questao.service';
import { Questao } from './../questao';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questao-add',
  templateUrl: './questao-add.component.html',
  styleUrls: ['./questao-add.component.scss']
})
export class QuestaoAddComponent implements OnInit {

  form: FormGroup
  msg: string

  constructor(private srv: QuestaoService) { }

  createForm(questao: Questao){
    this.form = new FormGroup({
      enunciado: new FormControl(questao.enunciado),
      tipo: new FormControl(questao.tipo),
      comentario: new FormControl(questao.comentario),
      peso: new FormControl(questao.peso),
      pacote_id: new FormControl(questao.pacote_id)
    })    
  }  

  onSubmit(){
    this.srv.create(this.form.value)
    .subscribe(r => this.msg = "Gravado com sucesso")
  }

  ngOnInit(): void {
    this.createForm(new Questao())
  }

}
