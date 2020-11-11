import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroAddComponent } from './components/livros/livro-add/livro-add.component';
import { LivroEditComponent } from './components/livros/livro-edit/livro-edit.component';
import { LivroDetailComponent } from './components/livros/livro-detail/livro-detail.component';
import { LivroListComponent } from './components/livros/livro-list/livro-list.component';


const routes: Routes = [
  {path: 'livro-add', component: LivroAddComponent},
  {path: 'livro-edit/:id', component: LivroEditComponent},
  {path: 'livro-show/:id', component: LivroDetailComponent},
  {path: 'livro-list', component: LivroListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
