import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-gigi-card',
  standalone: true,
  imports: [],
  templateUrl: './gigi-card.component.html',
  styleUrl: './gigi-card.component.css'
})
export class GigiCardComponent {
  @Input() backgroundColor: string = '#ffffff'
}
