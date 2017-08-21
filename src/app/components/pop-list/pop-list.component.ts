import { Component, OnInit } from '@angular/core';
import { ChildCommService } from '../child-comm.service';

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.css']
})
export class PopListComponent implements OnInit {
  
  poppedItem: any;
  recievedItem = <any>[];
  countSpliced = 0;

  constructor(private _CommService: ChildCommService) { }

  ngOnInit() {
      this._CommService.popItemSelected
        .subscribe( 
          itemToPop => {
            this.poppedItem = itemToPop;
            this.renderComp();
          }
        );
  }
  renderComp() {
    this.recievedItem.push(this.poppedItem);
    this.countSpliced = this.recievedItem.length;
  }
}
