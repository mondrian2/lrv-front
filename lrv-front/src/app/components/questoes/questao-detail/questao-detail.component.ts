import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestaoService } from 'src/app/services/questao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questao-detail',
  templateUrl: './questao-detail.component.html',
  styleUrls: ['./questao-detail.component.scss']
})
export class QuestaoDetailComponent implements OnInit {

  questao: Observable<any>
  questaodetail: any

  constructor(private route: ActivatedRoute, private router: Router, private srv: QuestaoService) { }

  ngOnInit(): void {
    this.questao = this.srv.get(this.route.snapshot.paramMap.get('id'));
    this.questao.subscribe(r => this.questaodetail = r)
  }

}
