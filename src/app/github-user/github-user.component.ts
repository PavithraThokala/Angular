import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiServiceService } from '../github-api-service.service';
import { Githubuser } from '../githubuser';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent {
  constructor(private srv:GithubApiServiceService,private activeRoute:ActivatedRoute){}

  user! : Githubuser
  userName:string=""
  isReady : boolean = false
  // ngOnInit(){
  //   let queryData=this.activeRoute.queryParamMap.subscribe(
  //     (params)=>{
  //       console.log(params);
  //       let value=params.get("userName")
  //       if(value!=null){
  //         this.userName=value
  //       }
  //       else{
  //         this.userName="fabpot"
  //       }
  //     }
  //     )
  //     this.fetchData()
  // }
  fetchData(){
    let url:string=`https://api.github.com/users/${this.userName}`
    //syntax for subscribe has changed starting from angular 8+
    this.srv.getUserResponse(url).subscribe({
      next : (value:Githubuser) => {this.user = value},
      complete: () =>{this.isReady=true,console.log("API COMPLETE")}

    }
    )
  }
}
