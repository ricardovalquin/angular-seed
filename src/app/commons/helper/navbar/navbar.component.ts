import {Component, Input} from '@angular/core';
import {Category} from '../../../core/model/category/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() categoryList: Category[];
  @Input() currentPage: number;

  constructor() {}

}
