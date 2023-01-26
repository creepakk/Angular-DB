import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  title = 'Post Page'

  post: IPost = {
    id: 0,
    title: '',
    content: '',
    user_id: 0
  }

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPost(this.route.snapshot.params["id"])
  }

  getPost(id: number): void {
    this.postsService.getPost(id).subscribe({
      next: (post) => this.post = post
    })
  }
}
