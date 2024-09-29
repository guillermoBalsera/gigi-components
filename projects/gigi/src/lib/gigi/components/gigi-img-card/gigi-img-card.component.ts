import {Component, Input} from '@angular/core';

@Component({
  selector: 'Gigi-img-card',
  standalone: true,
  imports: [],
  templateUrl: './gigi-img-card.component.html',
  styleUrl: './gigi-img-card.component.css'
})
export class GigiImgCardComponent {
  @Input() backgroundColor: string = '#fbfbfb';
  @Input() imageUrl: string = "https://cdn.stocksnap.io/img-thumbs/960w/sea-beach_440EMHADYN.jpg";
}
