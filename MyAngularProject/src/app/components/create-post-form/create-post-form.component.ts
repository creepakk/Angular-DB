import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss']
})
export class CreatePostFormComponent {
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute) { }

  data = {
    title: '',
    content: ''
  }

  user_id = this.route.snapshot.params["id"]

  createPost(): void {
    this.postsService.createPost(this.user_id, this.data).subscribe({
      next: (data) => { this.data = data; document.location.reload() }
    })
  }
}
