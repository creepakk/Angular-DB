import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  title = 'users page'

  users: IUser[] = []

  isChecked = false

  data = {
    name: '',
    surname: ''
  }

  constructor(
    public usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe({
      next: (users) => this.users = users
    })
  }
}
