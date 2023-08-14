import { Component } from '@angular/core';
import { Stock } from '../../../model/stock';
import { StockService } from '../../../services/stock.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers: [],
})
export class CreateStockComponent {
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(
    private stockService: StockService,
    public messageService: MessageService
  ) {
    this.stock = new Stock('Test', 'ASR', 45, 20, 'NYSE');
    this.messageService.message = 'Component level: Hello Service';
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockform) {
    console.log('Creating stock ', stockform);

    if (stockform.valid) {
      console.log('Creating stock ' + this.stock);
      let created = this.stockService.createStock(this.stock);
      if (created) {
        this.messageService.message =
          'Successfully created Stock with stock code ' + this.stock.code;
        this.stock = new Stock('', '', 0, 0, 'NASDAQ');
      } else {
        this.messageService.message =
          'Stock with stock code ' + this.stock.code + ' already exits';
      }
    } else {
      console.log('Stock form is in invalid state');
    }
  }
}
