import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';

import { ProductsService } from '../products.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cay-canh',
  templateUrl: './cay-canh.component.html',
  styleUrls: ['./cay-canh.component.css']
})
export class CayCanhComponent implements OnInit {
  productHome: Products[] = []
  p: number = 1;
  constructor(private prod: ProductsService,private authService: AuthService) {

  }
  ngOnInit(): void {
    this.getTypeEProducts();
  }

  getTypeEProducts(): void {
    this.prod.getProductlist()
      .subscribe(products => {
        this.productHome = products.filter(product => product.menu === 'caycanh');
      });
  }
}
