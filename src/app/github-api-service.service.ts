import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubRepo } from './github-repo';
import { Githubuser } from './githubuser';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class GithubApiServiceService {

  constructor(private httpSrv : HttpClient) {}
  
  getUserResponse(url:string):Observable<Githubuser>{
    return this.httpSrv.get<Githubuser>((url)) 
    //we're not storing
    //the returning result here. which means its a stateless request
    //you'll have to make a request again if u need it again
    //use: less consumption of RAM 
  }
  getProjectResponse(url:string):Observable<GithubRepo[]>{
    return this.httpSrv.get<GithubRepo[]>(url)
  }
  getUserDetailsResponse(url:string):Observable<UserInterface>{
    return this.httpSrv.get<UserInterface>((url)) 
  }
}
