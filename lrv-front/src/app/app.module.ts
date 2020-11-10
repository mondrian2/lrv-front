import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroAddComponent } from './components/livros/livro-add/livro-add.component';
import { LivroDetailComponent } from './components/livros/livro-detail/livro-detail.component';
import { LivroListComponent } from './components/livros/livro-list/livro-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroAddComponent,
    LivroDetailComponent,
    LivroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
