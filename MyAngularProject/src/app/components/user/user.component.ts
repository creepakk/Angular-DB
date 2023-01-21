import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/person';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: IUser = {
    id: 0,
    name: '',
    surname: ''
  }

  constructor(
    public usersService: UsersService
  ) { }

  ngOnInit() {
  }

}
