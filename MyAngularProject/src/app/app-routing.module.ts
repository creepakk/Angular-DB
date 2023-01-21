import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'user', component: UsersPageComponent },
  { path: 'user/:id', component: UserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
