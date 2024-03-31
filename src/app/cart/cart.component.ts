import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productDetail: Products | undefined
  cartList: Cart[] = []
  InStock: number = 0
  constructor(private router: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService) {
    this.cartList = cartService.getCartAll()
    this.ngOnInit()
  }
  ngOnInit(): void {
    let id = String(this.router.snapshot.params['id'])
    this.productService.getProductId(id).subscribe(data => {
      this.productDetail = data
    })
    this.InStock = this.productDetail?.inStock!
  }
  Add() {
    this.cartService.addCart(this.productDetail?.id!, this.productDetail)
    this.InStock = this.cartService.getInStock(this.productDetail?.id!)!
  }
  ItemCount() {
    return this.cartService.totalItems()
  }
  ItemSum() {
    return this.cartService.Total()
  }
  Remove(index: number) {
    this.cartService.RemoveCart(index)
  }
  DeleteAll() {
    this.cartService.DeleteAllCart()
  }
}
