import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'corp-card-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="corp-card-actions">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card-actions.component.css']
})
export class CardActionsComponent {

}
