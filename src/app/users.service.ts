import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected products: Users[] = []
  constructor(private http: HttpClient) {
    this.getProductlist().subscribe(res => {
      this.products = res
    })
  }
  private URL = `http://localhost:3000/users`
  getProductlist(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.URL}`)
  }
  getProductId(id: number) {
    return this.http.get<Users>(`${this.URL}/${id}`)
  }
  getProductMenu(menu: number) {
    return this.http.get<Users>(`${this.URL}/${menu}`)
  }
  AutoId() {
    var max = 1
    this.products.forEach(item => {
      if (item.id > max)
        max = item.id
    })
    return max + 1
  }
  AddProduct(frmProduct: any): Observable<Users[]> {
    return this.http.post<Users[]>(`${this.URL}`, frmProduct)
  }
  // EditProduct(index: number) {
  //   return this.products[index]
  // }
  UpdateProduct(id: number, frmProduct: any): Observable<Users[]> {
    return this.http.put<Users[]>(`${this.URL}/${id}`, frmProduct)
  }
  DeleteProduct(id: number): Observable<Users[]> {
    return this.http.delete<Users[]>(`${this.URL}/${id}`)
  }



}
