import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStockComponent } from './stock/create-stock/create-stock/create-stock.component';
import { StockService } from './services/stock.service';
import { MessageService } from './services/message.service';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent,
    StockListComponent,
  ],
  imports: [BrowserModule, 
            FormsModule, 
            ReactiveFormsModule,
            HttpClientModule],
  providers: [StockService],
  bootstrap: [AppComponent, MessageService],
})
export class AppModule {}
