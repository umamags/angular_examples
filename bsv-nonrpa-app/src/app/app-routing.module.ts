import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IportalListComponent } from './iportal-list/iportal-list.component';

const routes: Routes = [
  { path: 'iportalList', component: IportalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
