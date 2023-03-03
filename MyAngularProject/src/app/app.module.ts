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
import { FooterComponent } from './components/footer/footer.component';
import { GuidesPageComponent } from './pages/guides-page/guides-page.component';
import { FlightsPageComponent } from './pages/flights-page/flights-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { UpdateUserFormComponent } from './components/update-user-form/update-user-form.component';
import { UpdatePostFormComponent } from './components/update-post-form/update-post-form.component';

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
    FooterComponent,
    GuidesPageComponent,
    FlightsPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    CreateUserFormComponent,
    CreatePostFormComponent,
    UpdateUserFormComponent,
    UpdatePostFormComponent,
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
