import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CryptoComparePriceInterface } from './crypto-compare-price-interface';
import { CryptoResponse } from './crypto-response';
import { CryptoResponseOuter } from './crypto-response-outer';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor(private httpSrv : HttpClient) {}
  
  fetchResponse(url : string): Observable<CryptoResponse> {
    return this.httpSrv.get<CryptoResponse>(url) 
}
// fetchResponseOfCryptoCompare(url : string): Observable<any> {
//   return this.httpSrv.get<any>(url)   
// }
fetchResponseOfCryptoCompare(url: string)  : Observable<CryptoResponseOuter>{
    return this.httpSrv.get<CryptoResponseOuter>(url)
  }
}
