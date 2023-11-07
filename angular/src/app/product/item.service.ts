import { Product } from '../models';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Array<Product>> {
    // MLS 11/7/23 This worked great!
    // return (of([{id:1},{id:2},{id:3}]));

    // MLS 11/7/23 trying to use HttpClient
    // where endpoint is from function

    return this.httpClient.get<Array<Product>>("http://localhost:7071/api/getProducts");


  }
}
