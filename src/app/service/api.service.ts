import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {

    return this.http
    .get('https://fakestoreapi.com/products')
    .pipe(map(response => response))
  }
}
