import { Component } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  title = 'Posts Page'

  posts: IPost[] = []

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe({
      next: (posts) => this.posts = posts
    })
  }
}
