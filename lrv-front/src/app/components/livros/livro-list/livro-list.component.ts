import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.scss']
})
export class LivroListComponent implements OnInit {

  livros: Observable<any>
  livrolist: any

  constructor(private srv: LivroService) { }

  ngOnInit(): void {
    this.livros = this.srv.getAll();
    this.livros.subscribe(r => this.livrolist = r)
  }

}
