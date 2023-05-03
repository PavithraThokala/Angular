import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-from-child',
  templateUrl: './model-from-child.component.html',
  styleUrls: ['./model-from-child.component.css']
})
export class ModelFromChildComponent {
 @Input() formData :any
}
