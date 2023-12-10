import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TobuyscreenComponent} from "./dashboard/tobuyscreen/tobuyscreen.component";


const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('src/app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'user',
    canActivate:[AuthGuard],
    loadChildren: () => import('src/app/user/user.module').then((m) => m.UserModule),
  },
  {
    path:'dashboard',
    canActivate:[AuthGuard],
    loadChildren: () => import('../app/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:'store',
    canActivate:[AuthGuard],
    component:TobuyscreenComponent
  },
  {
    path:'',
    redirectTo:'auth',
    pathMatch:"full"
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
