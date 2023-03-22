import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'corp-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="corp-card">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}
