import { Component, Input,OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() productHome: Products[] = []

  p: number = 1;

  constructor() { }
  ngOnInit() {
  }
}
