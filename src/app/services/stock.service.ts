import { Stock } from '../model/stock';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockService {
  private stocks: Stock[];
  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock', 'SSC', 10, 20, 'NSE'),
      new Stock('Last Stock Company', 'LSC', 875, 780, 'NYSE'),
    ];
  }

  getStocks(): Stock[] {
    return this.stocks;
  }

  createStock(stock: Stock) {
    let foundStock = this.stocks.find((each) => each.code == stock.code);
    if (foundStock) {
      return false;
    }
    this.stocks.push(stock);
    return true;
  }

  toggleFavourite(stock: Stock) {
    let foundStock = this.stocks.find((each) => each.code == stock.code);
    if (foundStock) {
      foundStock.favorite = !foundStock?.favorite;
    }
  }
}
