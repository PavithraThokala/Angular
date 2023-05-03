import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoApiService } from '../crypto-api.service';
import { CryptoResponse } from '../crypto-response';

@Component({
  selector: 'app-crypto-single-price',
  templateUrl: './crypto-single-price.component.html',
  styleUrls: ['./crypto-single-price.component.css']
})
export class CryptoSinglePriceComponent {
  isReady : boolean = false
  currencyName:string=""
  response!:CryptoResponse
  cpCurrency:string=""
  constructor(private srv : CryptoApiService, private activeRoute:ActivatedRoute ){}

  fetchResponse(){
    let url : string =`https://min-api.cryptocompare.com/data/price?fsym=${this.currencyName}&tsyms=USD,JPY,EUR`
    this.srv.fetchResponse(url).subscribe(
      {
      next : (value : CryptoResponse) => {this.response=value},
      complete : ()=>{this.isReady=true;console.log('FINISHED')}
      }
    )
  }
  // ngOnInit(){
  //   let queryData=this.activeRoute.queryParamMap.subscribe(
  //   (params)=>{
  //     console.log(params);
  //     let value=params.get("currencyName")
  //     if(value!=null){
  //       this.currencyName=value
  //     }
  //     else{
  //       this.currencyName="BTC"
  //     }
  //   }
  //   )
  //   this.fetchResponse()
  // }
}
