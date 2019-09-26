import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent implements OnInit {
  num : number = 0;
  inc(){
    this.num++;
  }

  constructor() { }

  ngOnInit() {
  }

}
