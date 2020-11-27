import { Router } from '@angular/router';
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
  msg: string

  constructor(private srv: LivroService, private route: Router) { }

  goShow(id: number) {
    this.route.navigate(['livro-show', id])
  }

  goEdit(id: number) {
    this.route.navigate(['livro-edit', id])
  }

  goAdd() {
    this.route.navigate(['livro-add'])
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
    this.livros = this.srv.getAll();
    this.livros.subscribe(r => this.livrolist = r)
  }

}
