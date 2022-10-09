import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { CrudModule } from "./crud/crud.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CrudModule,
    MatSidenavModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
