import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroAddComponent } from './components/livros/livro-add/livro-add.component';
import { LivroDetailComponent } from './components/livros/livro-detail/livro-detail.component';
import { LivroListComponent } from './components/livros/livro-list/livro-list.component';
import { LivroEditComponent } from './components/livros/livro-edit/livro-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestoesComponent } from './components/questoes/questoes.component';
import { QuestaoAddComponent } from './components/questoes/questao-add/questao-add.component';
import { QuestaoDetailComponent } from './components/questoes/questao-detail/questao-detail.component';
import { QuestaoListComponent } from './components/questoes/questao-list/questao-list.component';
import { PacoteAddComponent } from './components/pacotes/pacote-add/pacote-add.component';
import { PacoteListComponent } from './components/pacotes/pacote-list/pacote-list.component';
import { PacoteDetailComponent } from './components/pacotes/pacote-detail/pacote-detail.component';
import { PacoteEditComponent } from './components/pacotes/pacote-edit/pacote-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroAddComponent,
    LivroDetailComponent,
    LivroListComponent,
    LivroEditComponent,
    QuestoesComponent,
    QuestaoAddComponent,
    QuestaoDetailComponent,
    QuestaoListComponent,
    PacoteAddComponent,
    PacoteListComponent,
    PacoteDetailComponent,
    PacoteEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
