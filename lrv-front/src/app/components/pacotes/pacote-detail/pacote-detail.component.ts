import { LivroService } from './../../../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PacoteService } from 'src/app/services/pacote.service';

@Component({
  selector: 'app-pacote-detail',
  templateUrl: './pacote-detail.component.html',
  styleUrls: ['./pacote-detail.component.scss']
})
export class PacoteDetailComponent implements OnInit {

  pacote: Observable<any>
  pacotedetail: any
  livro: any

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private srv: PacoteService,
    private srvLivro: LivroService
  ) { }

  ngOnInit(): void {
    this.pacote = this.srv.get(this.route.snapshot.paramMap.get('id'));
    this.pacote.subscribe(r => {
      this.pacotedetail = r;
      this.srvLivro.get(this.pacotedetail.livro_id).subscribe(r => this.livro = r)
    })
    
  }

}
