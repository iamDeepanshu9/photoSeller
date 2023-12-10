import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SellAPhotoComponent} from "../sell-aphoto/sell-aphoto.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  logout() {

  }

  openAddPhotoDialog() {
    const db = this.dialog.open(SellAPhotoComponent);
  }
}
