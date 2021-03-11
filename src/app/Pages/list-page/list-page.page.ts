import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Service/api-service.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.page.html',
  styleUrls: ['./list-page.page.scss'],
})
export class ListPagePage implements OnInit {
  size: number = 10;
  skip: number = 0;
  TotalCount: number = 0;
  items: any;
  employee: any;
  constructor(private apiService: ApiServiceService) { 
    this.employee = [];
  }

  ngOnInit() {
    this.getEmpData();
  }

  getEmpData(){
    this.apiService.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.items = data;
      this.TotalCount = this.items.length;
      //console.log(this.items);
      this.loadData();
    });
  }

  loadData(){  //Load data when called    
    var tempCount = this.skip + this.size;
    if(this.skip != this.TotalCount){
      for (let i = this.skip; i < tempCount; i++) {
        this.employee.push(this.items[i]);
      }
    }   
    return 
  }

  doInfinite(infiniteScroll) {
    if (this.skip < this.TotalCount) {
      setTimeout(() => {
        this.skip += this.size;
        this.loadData();
        infiniteScroll.target.complete();
      }, 500);
    }
  }

}
