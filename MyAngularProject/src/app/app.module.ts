import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { HeadComponent } from './components/head/head.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    HeadComponent,
    UserComponent,
    UsersPageComponent,
    UserPageComponent,
    PostComponent,
    PostsPageComponent,
    PostPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
