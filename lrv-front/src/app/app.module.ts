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

@NgModule({
  declarations: [
    AppComponent,
    LivroAddComponent,
    LivroDetailComponent,
    LivroListComponent,
    LivroEditComponent
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
