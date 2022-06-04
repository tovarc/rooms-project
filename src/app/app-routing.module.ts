import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalBookComponent } from './components/internal-book/internal-book.component';
import { InternalProfessorComponent } from './components/internal-professor/internal-professor.component';
import { InternalRoomComponent } from './components/internal-room/internal-room.component';
import { InternalComponent } from './components/internal/internal.component';
import { LoginComponent } from './components/login/login.component';
import { NewsAddComponent } from './components/news-add/news-add.component';
import { NewsSingleComponent } from './components/news-single/news-single.component';
import { NewsComponent } from './components/news/news.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: NewsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'news', component: NewsComponent, pathMatch: 'full' },
  { path: 'news/add', component: NewsAddComponent, pathMatch: 'full' },
  { path: 'news/:id', component: NewsSingleComponent, pathMatch: 'full' },
  { path: 'internal', component: InternalComponent, pathMatch: 'full' },
  {
    path: 'internal/book',
    component: InternalBookComponent,
    pathMatch: 'full',
  },
  {
    path: 'internal/room',
    component: InternalRoomComponent,
    pathMatch: 'full',
  },
  {
    path: 'internal/professor',
    component: InternalProfessorComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
