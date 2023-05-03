import { Component } from '@angular/core';
import { GithubApiServiceService } from '../github-api-service.service';
import { GithubRepo } from '../github-repo';
import { Githubuser } from '../githubuser';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent {
  repos : GithubRepo[]=[]
  isReady : boolean = false
  user! : Githubuser
  userName:string=""
  constructor(private srv:GithubApiServiceService){}

  fetchProjectResponse(){
    let url=`https://api.github.com/users/${this.userName}/repos`
    this.srv.getProjectResponse(url).subscribe(
      /* 
        for each chunk of response received
        a. loop over the responses
        b. send each response to repos array of class by pushing
            response into this array
      */
      {
        next : (value : GithubRepo[])=>{
          value.forEach((r:GithubRepo)=>this.repos.push(r))
        },
        complete: ()=>{this.isReady=true,console.log("API COMPLETE")}
      }
    )
  }

}
