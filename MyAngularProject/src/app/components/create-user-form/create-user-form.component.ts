import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent {
  constructor(public usersService: UsersService) { }

  data = {
    name: '',
    surname: ''
  }

  createUser(): void {
    this.usersService.createUser(this.data).subscribe({
      next: () => { document.location.reload() }
    })
  }
}
