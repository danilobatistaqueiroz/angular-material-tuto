import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-head-side-bar',
  templateUrl: './head-side-bar.component.html',
  styleUrls: ['./head-side-bar.component.css']
})
export class HeadSideBarComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit() {
  }

}
