import { Component } from '@angular/core';
import { GithubApiServiceService } from '../github-api-service.service';
import { UserInterface } from '../user-interface';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(private srv:GithubApiServiceService){}

  user! : UserInterface
  isReady : boolean = false
  userName:string=""
  ngOnInit(){
  }
  fetchData(){
    let url:string="https://api.github.com/users/"+this.userName
    this.srv.getUserDetailsResponse(url).subscribe({
      next : (value:UserInterface) => {this.user = value},
      complete: () =>{this.isReady=true,console.log("API COMPLETE")}
 
    }
    )
  }
}
