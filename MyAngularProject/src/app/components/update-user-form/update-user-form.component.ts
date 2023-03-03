import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user-form',
  templateUrl: './update-user-form.component.html',
  styleUrls: ['./update-user-form.component.scss']
})
export class UpdateUserFormComponent {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) { }

  user: IUser = {
    id: this.route.snapshot.params["id"],
    name: '',
    surname: ''
  }

  updateUser(): void {
    this.usersService.updateUser(this.user.id, this.user).subscribe({
      next: () => document.location.reload()
    })
  }
}
