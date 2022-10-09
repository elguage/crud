import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from "./crud/components/user-info/user-info.component";
import { CrudComponent } from "./crud/crud.component";

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: CrudComponent },
      { path: 'info-user/:id', component: UserInfoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
