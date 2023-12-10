import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {
  @Input() photoDescription: string = 'Photo Description';
  @Input() landmarkName: string = 'Landmark Name';
  @Input() photoCount: number = 0;
  @Input() link: string = '' ;
  @Input() type: 'Uploaded' | 'Purchased' | 'ToBuy' = null;

  constructor() { }

  ngOnInit(): void {
  }

}
