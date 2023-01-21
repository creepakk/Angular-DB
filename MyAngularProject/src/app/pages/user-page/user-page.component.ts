import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/person';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  title = 'User Page'

  user: IUser = {
    id: 0,
    name: '',
    surname: ''
  }

  isChecked = false

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params["id"])
  }

  getUser(id: number): void {
    this.usersService.getUser(id).subscribe(
      { next: (user) => this.user = user }
    )
  }

  updateUser(): void {
    this.usersService.updateUser(this.user.id, this.user).subscribe({
      next: (data) => document.location.reload()
    })
  }

  deleteUser(): void {
    this.usersService.deleteUser(this.user.id).subscribe({
      next: (res) => this.router.navigate(['/user'])
    })
  }
}
