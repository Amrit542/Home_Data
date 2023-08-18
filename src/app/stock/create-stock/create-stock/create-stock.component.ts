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
  ) {this.initializeStock()}

  initializeStock() {
    this.stock =  {
      name: 'Amrit 1',
      code: 'AAS',
      price: 100,
      previousPrice: 200,
      exchange: 'NASDAQ',
      favorite: false
    };
  }

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockform) {
    console.log('Creating stock ', stockform);

    if (stockform.valid) {
      this.stockService.createStock(this.stock)
      .subscribe((result: any) => {
        this.messageService.message = result.msg;
        this.initializeStock();
      }, (err)=>{
        this.messageService.message = err.error.msg;
      });
  } else {
    console.log('Stock form is in an invalid state');
    }
  }
}
