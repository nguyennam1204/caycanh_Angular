import { Component, Input, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms'

import { AuthService } from '../auth/auth.service';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() product: Users[] = []
  showRating(event: any) {
    alert(`${event}`)
  }

  formProduct = new FormGroup({
    // productId: new FormControl<number>(1),
    id: new FormControl<number>(0),

    email: new FormControl<string>(''),
    role: new FormControl<number>(0),

  })
  constructor(private prod: UsersService,private authService: AuthService) {

  }
  ngOnInit(): void {

    this.prod.getProductlist().subscribe(data => {
      this.product=data
    })
  }
  file: string = ''
  IsAdd: number = 1
  IsUpdate: number = 0
  Add() {

    this.prod.AddProduct(this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })
  }
  id: any
  Edit(index: number) {
    this.id = this.product[index].id
    this.formProduct.controls['email'].setValue(this.product[index].email)

    this.formProduct.controls['role'].setValue(this.product[index].role)

  }
  Update() {

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

  p: number = 1;


  isAuthenticated() {
    return this.authService.isAuthenticated
  }






}
