import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  // public stocks: Array<Stock>;
  // @Input() public stock: Stock;
  // constructor() {}

  // ngOnInit() {}

  // toggleFavorite(event) {
  //   console.log(event);

  //   this.stock.favorite = !this.stock.favorite;
  // }
  public stocks: Stock[];
  constructor(private stockService: StockService) {}
  ngOnInit(): void {
    this.stocks = this.stockService.getStocks();
  }
  onToggleFavourite(stock: Stock) {
    console.log('---in stock list');

    console.log('Favourite for Stock ', stock, ' was triggered');
    this.stockService.toggleFavourite(stock);
  }
}
