import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { IUser } from 'src/app/models/user';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  title = 'User Page'

  user: IUser = {
    id: 0,
    name: '',
    surname: ''
  }



  posts: IPost[] = []

  createPostIsChecked = false

  updateIsChecked = false

  postsIsChecked = false

  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"]
    this.getUser(id)
    this.getPostsByUser(id)
  }

  getUser(id: number): void {
    this.usersService.getUser(id).subscribe(
      { next: (user) => this.user = user }
    )
  }

  deleteUser(): void {
    this.usersService.deleteUser(this.user.id).subscribe({
      next: () => this.router.navigate(['users'])
    })
  }

  getPostsByUser(user_id: number): void {
    this.postsService.getPostsByUser(user_id).subscribe({
      next: (posts) => this.posts = posts
    })
  }
}
