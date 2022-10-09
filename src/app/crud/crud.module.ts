import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserActionDialogComponent } from "./components/dialog/user-action-dialog/user-action-dialog.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { CrudComponent } from "./crud.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    UserActionDialogComponent,
    HeaderComponent,
    UserInfoComponent,
    UserListComponent,
    CrudComponent
  ],
  exports: [
    CrudComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class CrudModule {
}
