import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  navArray : string[]=[
    "crypto",
    "history",
    "user",
    "project",
    "employee",
    "calculator",
    "details/7263",
    "pipes",
    "model",
    "structuraldirective"
  ]
}
