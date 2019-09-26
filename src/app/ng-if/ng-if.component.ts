import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  exibeMsg : boolean = true;
  exibir(){
    this.exibeMsg = !this.exibeMsg;
  }

  constructor() { }

  ngOnInit() {
  }

}
