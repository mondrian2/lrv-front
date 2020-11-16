import { Component, OnInit } from '@angular/core';
import { QuestaoService } from 'src/app/services/questao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questao-list',
  templateUrl: './questao-list.component.html',
  styleUrls: ['./questao-list.component.scss']
})
export class QuestaoListComponent implements OnInit {

  questoes: Observable<any>
  questaolist: any

  constructor(private srv: QuestaoService) { }

  ngOnInit(): void {
    this.questoes = this.srv.getAll();
    this.questoes.subscribe(r => {
      this.questaolist = r
      console.log(r)
    })
  }

}
