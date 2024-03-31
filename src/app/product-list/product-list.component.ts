import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
import { FormGroup, FormControl } from '@angular/forms'
import { ProductsService } from '../products.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() product: Products[] = []
  showRating(event: any) {
    alert(`${event}`)
  }

  formProduct = new FormGroup({
    // productId: new FormControl<number>(1),
    productName: new FormControl<string>(''),
    menu: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>('')
  })
  constructor(private prod: ProductsService,private authService: AuthService) {

  }
  ngOnInit(): void {
    this.formProduct.controls['imageUrl'].setValue('./assets/images')
    this.prod.getProductlist().subscribe(data => {
      this.product = data
    })
  }
  file: string = ''
  IsAdd: number = 1
  IsUpdate: number = 0
  Add() {
    this.formProduct.controls['imageUrl'].setValue(this.file)
    this.prod.AddProduct(this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })
  }
  id: any
  Edit(index: number) {
    this.id = this.product[index].id
    this.formProduct.controls['productName'].setValue(this.product[index].productName)
    this.formProduct.controls['menu'].setValue(this.product[index].menu)
    this.formProduct.controls['releaseDate'].setValue(this.product[index].releaseDate)
    this.formProduct.controls['price'].setValue(this.product[index].price)
    this.formProduct.controls['description'].setValue(this.product[index].description)
    this.file = this.product[index].imageUrl
  }
  Update() {
    this.formProduct.controls['imageUrl'].setValue(this.file)
    this.prod.UpdateProduct(this.id, this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })
  }
  Delete(id: number) {
    // this.id = this.product[index].id
    this.prod.DeleteProduct(id).subscribe((res) => {
      this.ngOnInit()
    })
  }
  onChange(event: any) {
    var str = event.target.files[0].name
    this.file = './assets/images/' + str
  }
  p: number = 1;


  isAuthenticated() {
    return this.authService.isAuthenticated
  }




}
