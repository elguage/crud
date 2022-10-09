import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../services/user.service";
import {UserActionDialogComponent} from "../dialog/user-action-dialog/user-action-dialog.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user!: User;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'roleUser', 'action'];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit():void {
    this.getUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsers() {
    this.userService.getUserList().subscribe((user: User[]) => {
      this.dataSource = new MatTableDataSource(user);
      console.log(user)
    })
  }


  updateUser(user: User) {
    this.dialog.open(UserActionDialogComponent, {
      data: user
    }).afterClosed().subscribe(value => {
      if(value === 'updateUser') {
        this.getUsers();
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
        this.getUsers();
    });
  }
}

