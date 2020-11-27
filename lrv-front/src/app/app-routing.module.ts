import { QuestaoEditComponent } from './components/questoes/questao-edit/questao-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroAddComponent } from './components/livros/livro-add/livro-add.component';
import { LivroEditComponent } from './components/livros/livro-edit/livro-edit.component';
import { LivroDetailComponent } from './components/livros/livro-detail/livro-detail.component';
import { LivroListComponent } from './components/livros/livro-list/livro-list.component';
import { PacoteAddComponent } from './components/pacotes/pacote-add/pacote-add.component';
import { PacoteEditComponent } from './components/pacotes/pacote-edit/pacote-edit.component';
import { PacoteDetailComponent } from './components/pacotes/pacote-detail/pacote-detail.component';
import { PacoteListComponent } from './components/pacotes/pacote-list/pacote-list.component';
import { QuestaoAddComponent } from './components/questoes/questao-add/questao-add.component';
import { QuestaoDetailComponent } from './components/questoes/questao-detail/questao-detail.component';
import { QuestaoListComponent } from './components/questoes/questao-list/questao-list.component';


const routes: Routes = [
  {path: 'livro-add', component: LivroAddComponent},
  {path: 'livro-edit/:id', component: LivroEditComponent},
  {path: 'livro-show/:id', component: LivroDetailComponent},
  {path: 'livro-list', component: LivroListComponent},

  {path: 'pacote-add', component: PacoteAddComponent},
  {path: 'pacote-edit/:id', component: PacoteEditComponent},
  {path: 'pacote-show/:id', component: PacoteDetailComponent},
  {path: 'pacote-list', component: PacoteListComponent},

  {path: 'questao-add', component: QuestaoAddComponent},
  {path: 'questao-edit/:id', component: QuestaoEditComponent},
  {path: 'questao-show/:id', component: QuestaoDetailComponent},
  {path: 'questao-list', component: QuestaoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
