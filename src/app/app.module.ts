import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsSingleComponent } from './components/news-single/news-single.component';
import { InternalComponent } from './components/internal/internal.component';
import { NewsAddComponent } from './components/news-add/news-add.component';
import { InternalBookComponent } from './components/internal-book/internal-book.component';
import { InternalRoomComponent } from './components/internal-room/internal-room.component';
import { InternalProfessorComponent } from './components/internal-professor/internal-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent,
    RegisterComponent,
    NewsSingleComponent,
    InternalComponent,
    NewsAddComponent,
    InternalBookComponent,
    InternalRoomComponent,
    InternalProfessorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
