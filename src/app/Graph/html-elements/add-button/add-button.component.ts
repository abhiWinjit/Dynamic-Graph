import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-button',
  template: '<a href="#" class="btn btn-default btn-circle"><i class="fa fa-plus" ></i></a>',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
