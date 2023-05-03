import { Component } from '@angular/core';
import { CryptoApiService } from '../crypto-api.service';
import { CryptoOhlcv } from '../crypto-ohlcv';
import { CryptoResponseOuter } from '../crypto-response-outer';

@Component({
  selector: 'app-crypto-compare-price',
  templateUrl: './crypto-compare-price.component.html',
  styleUrls: ['./crypto-compare-price.component.css']
})
export class CryptoComparePriceComponent {
  isReady : boolean = false
    responses : CryptoOhlcv[] = []

    constructor(private srv : CryptoApiService){}
    fetchHistoricalPrices(){
      let url = "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10"
      this.srv.fetchResponseOfCryptoCompare(url).subscribe(
        {

          next : (value : CryptoResponseOuter)=>{
            value.Data.Data.forEach( (value : CryptoOhlcv) => this.responses.push(value)    )
          },


          complete:()=>{this.isReady = true; console.log(this.responses)}
        }
      )
    }
    displayedColumns: string[] =['sNo', 'time', 'high', 'low', 'open', 'volumeFrom', 'volumeTo', 'close', 'conversionType'];
    ELEMENT_DATA: CryptoOhlcv[]=this.responses
    datasource=this.ELEMENT_DATA
}
