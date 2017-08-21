import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ChildCommService } from '../child-comm.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() list;
  @Output() selectedItem= new EventEmitter();
  @Output() reduceCount= new EventEmitter();

  // onSelect() passes the value of the current row to the Parent Component.
  onSelect(item: string): void {
    this.selectedItem.emit(item);
  }

  constructor(private _CommService: ChildCommService ) { }

  // popItem() pop's the value from the list and then emits that item to the pop Table.
  popItem(i){
    debugger
    console.log(this.list[i]);
    this.emitItem(i);
    debugger
    this.list.splice(i,1);
  }

  emitItem(i){
    this._CommService.popItemSelected.emit(this.list[i]);
    this.reduceCount.emit(this.list[i]);
  }

  ngOnInit() {
    console.log("list",this.list);
  }

}
