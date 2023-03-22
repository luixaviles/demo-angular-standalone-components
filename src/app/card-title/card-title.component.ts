import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'corp-card-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>
        <ng-content></ng-content>
    </h4>
  `,
  styleUrls: ['./card-title.component.css']
})
export class CardTitleComponent {

}
