import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected products: Products[] = [];

  constructor(private http: HttpClient) {
    this.getProductlist().subscribe(res => {
      this.products = res;
    });
  }

  private URL = `http://localhost:3000/products`;

  getProductlist(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.URL}`);
  }

  getProductId(id: string): Observable<Products> {
    return this.http.get<Products>(`${this.URL}/${id}`);
  }

  getProductMenu(menu: number): Observable<Products> {
    return this.http.get<Products>(`${this.URL}/${menu}`);
  }

  AutoId(): number {
    var max = 1;
    this.products.forEach(item => {
      if (item.id > max) {
        max = item.id;
      }
    });
    return max + 1;
  }

  AddProduct(frmProduct: any): Observable<Products[]> {
    return this.http.post<Products[]>(`${this.URL}`, frmProduct);
  }

  UpdateProduct(id: number, frmProduct: any): Observable<Products[]> {
    return this.http.put<Products[]>(`${this.URL}/${id}`, frmProduct);
  }

  DeleteProduct(id: number): Observable<Products[]> {
    return this.http.delete<Products[]>(`${this.URL}/${id}`);
  }

  // New function to delete all products
}
