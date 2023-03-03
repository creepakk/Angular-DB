import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.scss']
})
export class UpdatePostFormComponent {
  constructor(private postsService: PostsService) { }

  @Input() post: IPost

  ngOnInit() { }

  updatePost(): void {
    this.postsService.updatePost(this.post.id, this.post).subscribe({
      next: () => document.location.reload()
    })
  }

}
