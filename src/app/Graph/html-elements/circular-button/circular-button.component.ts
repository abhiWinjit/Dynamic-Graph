import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-button',
  template: '<a href="#" class="btn btn-default btn-circle"><i class="fa fa-user"></i></a>',
  styleUrls: ['./circular-button.component.css']
})
export class CircularButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
