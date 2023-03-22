import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'corp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="corp-button">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

}
