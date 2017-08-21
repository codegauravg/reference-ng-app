import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Experiments on Angular 2+';
  list = ['AAAAAA','BBBBBB','CCCCCCCC','DDDDDD','EEEEEE'];
  count = this.list.length;

  showSelectedItem = '';

  addItem(newItem: string) {
    if (newItem) {
      this.list.push(newItem);
      this.count++ ;
      (<HTMLInputElement>document.getElementById("inputItem")).value = "";
    }
  }

  handleSelectedItem(selectedItem){
   this.showSelectedItem = selectedItem;
   (<HTMLLabelElement>document.getElementById("detailLabel")).textContent = this.showSelectedItem;
  }

  reduceCount(reduceCount){
    this.count--;
  }
}
