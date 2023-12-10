import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-download-counter',
  templateUrl: './download-counter.component.html',
  styleUrls: ['./download-counter.component.css']
})
export class DownloadCounterComponent implements OnInit {
  @Input() count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
