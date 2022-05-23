import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data, Store } from './../models/store';
import { PData, Product } from './../models/product';
import { Category } from '../models/categories';




@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://us-central1-test-b7665.cloudfunctions.net/api/stores';
  private idStore = 'ijpxNJLM732vm8AeajMR'


  getStores(): Observable<Data[]>{
    return this.http.get<Data[]>(`${this.apiUrl}`)
  }

  getStoreById(idStore: string): Observable<Store>{
    return this.http.get<Store>(`${this.apiUrl}/${idStore}`)
  }

  getProducts(): Observable<PData[]>{
    return this.http.get<PData[]>(`${this.apiUrl}/${this.idStore}/products`)
  }

  getProductsById(idProduct: string): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${this.idStore}/products/${idProduct}`)
  }

  addProduct(): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/${this.idStore}/products`, null)
  }

  deleteProduct(idProduct: string): Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrl}/${this.idStore}/products/${idProduct}`)
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.apiUrl}/${this.idStore}/stats/categories`)
  }

}

