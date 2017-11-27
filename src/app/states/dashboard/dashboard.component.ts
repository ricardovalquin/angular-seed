import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../core/model/category/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() public categories: Category[];

  constructor() { }

  ngOnInit() {
    console.log(this.categories);
  }

}
