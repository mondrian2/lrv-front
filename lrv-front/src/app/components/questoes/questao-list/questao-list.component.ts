import { QuestaoService } from './../../../services/questao.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questao-list',
  templateUrl: './questao-list.component.html',
  styleUrls: ['./questao-list.component.scss']
})
export class QuestaoListComponent implements OnInit {

  questoes: Observable<any>
  questaolist: any
  msg: string

  constructor(private srv: QuestaoService, private route: Router) { }

  goShow(id: number) {
    this.route.navigate(['questao-show', id])
  }

  goEdit(id: number) {
    this.route.navigate(['questao-edit', id])
  }

  goAdd() {
    this.route.navigate(['questao-add'])
  }

  delete(id: number){
    this.srv.delete(id).subscribe(r => {this.success(r)})
  }

  success(r){
    this.msg = "Excluído com sucesso"
    this.removeMsg()
    this.ngOnInit()
  }

  removeMsg(){
    setTimeout(()=>{
      this.msg = null;
    }, 2000);
  }

  ngOnInit(): void {
    this.questoes = this.srv.getAll();
    this.questoes.subscribe(r => this.questaolist = r)
  }

}
