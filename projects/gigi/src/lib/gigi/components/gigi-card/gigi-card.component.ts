import {Component, Input} from '@angular/core';

@Component({
  selector: 'Gigi-card',
  standalone: true,
  imports: [],
  templateUrl: './gigi-card.component.html',
  styleUrl: './gigi-card.component.css'
})
export class GigiCardComponent {
  @Input() backgroundColor: string = '#fbfbfb';
}
