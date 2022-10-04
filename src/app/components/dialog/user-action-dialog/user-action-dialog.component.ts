import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-action-dialog',
  templateUrl: './user-action-dialog.component.html',
  styleUrls: ['./user-action-dialog.component.scss']
})
export class UserActionDialogComponent implements OnInit {
  form!: FormGroup;
  isAddUser: boolean = true;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UserActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataUser: any
  ) {
  }

  ngOnInit(): void {
    this.formBuild();
  }

  formBuild() {
    this.form = this.fb.group({
      "firstName": new FormControl('', Validators.required),
      "lastName": new FormControl('', Validators.required),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "roleUser": new FormControl('', Validators.required)
    })
    if(this.dataUser) {
      this.isAddUser = false;
      this.form.controls['firstName'].setValue(this.dataUser.firstName);
      this.form.controls['lastName'].setValue(this.dataUser.lastName);
      this.form.controls['email'].setValue(this.dataUser.email);
      this.form.controls['roleUser'].setValue(this.dataUser.roleUser);
    }
  }

  submit(): void {
    if (this.form.valid && !this.dataUser) {
      this.userService.addUser(this.form.value).subscribe({
          next: () => {
            console.log('user create')
            this.form.reset();
            this.dialogRef.close('createUser');
          }
        }
      )
    }
    else {
      this.userService.updateUser(this.form.value,this.dataUser.id).subscribe({
        next: () => {
          console.log('user update');
          this.form.reset();
          this.dialogRef.close('updateUser');
        }
      });
    }
  }
}
