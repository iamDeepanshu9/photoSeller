import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {UploadedScreenComponent} from "./uploaded-screen/uploaded-screen.component";
import {PurchasedScreenComponent} from "./purchased-screen/purchased-screen.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path:'uploaded',
        component: UploadedScreenComponent
      },
      {
        path:'purchased',
        component: PurchasedScreenComponent
      },
      {
        path:'',
        redirectTo:'uploaded',
        pathMatch: "full"
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
