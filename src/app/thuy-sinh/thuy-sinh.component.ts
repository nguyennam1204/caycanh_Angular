import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';

import { ProductsService } from '../products.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-thuy-sinh',
  templateUrl: './thuy-sinh.component.html',
  styleUrls: ['./thuy-sinh.component.css']
})
export class ThuySinhComponent {
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
        this.productHome = products.filter(product => product.menu === 'thuysinh');
      });
  }
}
