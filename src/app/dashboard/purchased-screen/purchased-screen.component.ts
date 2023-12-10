import { Component, OnInit } from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-purchased-screen',
  templateUrl: './purchased-screen.component.html',
  styleUrls: ['./purchased-screen.component.css']
})
export class PurchasedScreenComponent implements OnInit {
  photos = [
    { description: 'I am here to rule the kingdome', landmark: 'I dont know i ewdwed dewdewd dewd dwdwd dwdwd dwdws is gong to be qwork' },
    // Add more photos with descriptions and landmark names
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tabHandler(e: MatTabChangeEvent) {
    console.log(e);
    switch (e.index) {
      case 0:
        this.router.navigate([`/dashboard/uploaded`]);
        break;
      case 1:
        this.router.navigate([`/dashboard/purchased`]);
        break;
    }
  }

}
