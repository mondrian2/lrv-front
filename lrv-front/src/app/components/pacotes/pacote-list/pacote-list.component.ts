import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PacoteService } from 'src/app/services/pacote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacote-list',
  templateUrl: './pacote-list.component.html',
  styleUrls: ['./pacote-list.component.scss']
})
export class PacoteListComponent implements OnInit {

  pacotes: Observable<any>
  pacotelist: any
  msg: string

  constructor(private srv: PacoteService, private route: Router) { }

  goShow(id: number) {
    this.route.navigate(['pacote-show', id])
  }

  goEdit(id: number) {
    this.route.navigate(['pacote-edit', id])
  }

  goAdd() {
    this.route.navigate(['pacote-add'])
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
    this.pacotes = this.srv.getAll();
    this.pacotes.subscribe(r => this.pacotelist = r)
  }

}
