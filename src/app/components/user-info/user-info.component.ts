import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../services/user.service";
import {UserActionDialogComponent} from "../dialog/user-action-dialog/user-action-dialog.component";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: any;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'roleUser', 'action'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit():void {
    this.getUsers();
  }

  ngOnChanges():void {
    console.log('trigger')
    this.getUsers();
  }

  getUsers() {
    this.userService.getUserList().subscribe({
      next:(response) => {
        console.log(response)
        this.dataSource = new MatTableDataSource(response);
      }
    })
  }

  updateUser(user: any) {
    this.dialog.open(UserActionDialogComponent, {
      data: user
    }).afterClosed().subscribe(value => {
      if(value === 'updateUser') {
        this.getUsers();
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.getUsers();
      }
    });
  }
}
