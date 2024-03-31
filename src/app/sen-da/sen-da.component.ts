import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';

import { ProductsService } from '../products.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sen-da',
  templateUrl: './sen-da.component.html',
  styleUrls: ['./sen-da.component.css']
})
export class SenDaComponent {
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
        this.productHome = products.filter(product => product.menu === 'senda');
      });
  }
}
