import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

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

  constructor() { }

  ngOnInit() {
  }

}
