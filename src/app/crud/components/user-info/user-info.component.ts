import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user!: any;
  id!: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.userService.getInfoUser(this.id).subscribe( user => {
      this.user = user;
    })
  }

  back(): void {
    this._location.back();
  }
}
