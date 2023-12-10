import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-sell-aphoto',
  templateUrl: './sell-aphoto.component.html',
  styleUrls: ['./sell-aphoto.component.css']
})
export class SellAPhotoComponent implements OnInit {
  formGroup: FormGroup;
  landmarks: any = ['home', 'hall', 'Bedroom'];
  isExistingLandmark$$ = new BehaviorSubject(false);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.formGroup.get('isExistingLandmark').valueChanges.subscribe((value)=>{
      this.isExistingLandmark$$.next(value);
    })
  }

  createForm(){
    this.formGroup = this.fb.group({
      PhotoName: ['', [Validators.required]],
      Descriptions: ['', [Validators.required]],
      FilePath: ['', [Validators.required]],
      photo: [''],
      UserId: ['', [Validators.required]],
      isExistingLandmark: [false],
      LandmarkId: [0,[ Validators.required]],
      LandMarkName: ['',[ Validators.required]],
    })
  }

  onFileSelected(event: Event) {
    console.log(event);
  }

  upload() {
    console.log('handle upload', this.formGroup.value)
  }
}
