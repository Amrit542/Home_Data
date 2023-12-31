import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../model/stock';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class StockService {
  private stocks: Stock[];
  constructor(private http: HttpClient) {}
  

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock', {
      headers: new HttpHeaders()
          .set('Authorization', 'MyAuthorizationValue-001')
          .set('X-example-header', 'TestValue'),
          params: {
            q: 'test',
            test:'value'
          }
    })
  }

  createStock(stock: Stock): Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  toggleFavourite(stock: Stock) {
   
    return this.http.patch<Stock>('api/stock/' + stock.code, {
      favourite: !stock.favorite
    })
  }
}
