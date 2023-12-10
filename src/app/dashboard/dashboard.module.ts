import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SellAPhotoComponent } from './sell-aphoto/sell-aphoto.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MaterialModule} from "../material/material.module";
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { DownloadCounterComponent } from './download-counter/download-counter.component';
import { UploadedScreenComponent } from './uploaded-screen/uploaded-screen.component';
import { PurchasedScreenComponent } from './purchased-screen/purchased-screen.component';
import { TobuyscreenComponent } from './tobuyscreen/tobuyscreen.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    SellAPhotoComponent,
    HeaderComponent,
    PhotoCardComponent,
    DownloadCounterComponent,
    UploadedScreenComponent,
    PurchasedScreenComponent,
    TobuyscreenComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatListModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
