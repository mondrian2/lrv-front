import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from 'src/app/services/livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livro-detail',
  templateUrl: './livro-detail.component.html',
  styleUrls: ['./livro-detail.component.scss']
})
export class LivroDetailComponent implements OnInit {

  livro: Observable<any>
  livrodetail: any

  constructor(private route: ActivatedRoute, private router: Router, private srv: LivroService) { }

  ngOnInit(): void {
    this.livro = this.srv.get(this.route.snapshot.paramMap.get('id'));
    this.livro.subscribe(r => this.livrodetail = r)
  }

}
