import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {

  items = [];
  constructor() { }

  ngOnInit() {
    this.loadData(20);
  }

  loadData(num){  //Load data when called
    for (let i = 0; i < num; i++) {
      let obj = {
          'name': 'Super Mario World'
      }
      this.items.push( obj );      
    }
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.loadData(10);      
      infiniteScroll.target.complete();
    }, 500);
  }

}
