import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  detailsIsChecked = false

  updateIsChecked = false

  @Input() post: IPost

  constructor(private postsService: PostsService) { }

  deletePost(): void {
    this.postsService.deletePost(this.post.id).subscribe({
      next: () => document.location.reload()
    })
  }
}
