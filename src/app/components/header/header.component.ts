import { Component } from '@angular/core';
import { UserActionDialogComponent } from "../dialog/user-action-dialog/user-action-dialog.component";
import { UserService } from "../../services/user.service";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) { }

  getUsers() {
    this.userService.getUserList().subscribe({
      next:(response) => {
        console.log(response)
      }
    })
  }

  openDialog() {
    this.dialog.open(UserActionDialogComponent).afterClosed().subscribe((value) => {
      if(value === 'createUser') {
        this.getUsers();
      }
    });
  }
}
