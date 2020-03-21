import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  selectedSector: string="";
  //@Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {

  }

  selectChangeHandler(event:any){

    this.selectedSector = event.target.value;
    //this.childEvent.emit(this.selectedSector);
  }

}
