import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { GuidesPageComponent } from './pages/guides-page/guides-page.component';
import { FlightsPageComponent } from './pages/flights-page/flights-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'guides', component: GuidesPageComponent },
  { path: 'flights', component: FlightsPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'post/:id', component: PostPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
