import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tobuyscreen',
  templateUrl: './tobuyscreen.component.html',
  styleUrls: ['./tobuyscreen.component.css']
})
export class TobuyscreenComponent implements OnInit {
  photos = [
    { description: 'I am here to rule the kingdome', landmark: 'I dont know i ewdwed dewdewd dewd dwdwd dwdwd dwdws is gong to be qwork' },
    // Add more photos with descriptions and landmark names
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
