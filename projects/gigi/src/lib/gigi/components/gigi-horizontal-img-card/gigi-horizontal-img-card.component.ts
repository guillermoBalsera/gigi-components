import {Component, Input} from '@angular/core';

@Component({
  selector: 'Gigi-horizontal-img-card',
  standalone: true,
  imports: [],
  templateUrl: './gigi-horizontal-img-card.component.html',
  styleUrl: './gigi-horizontal-img-card.component.css'
})
export class GigiHorizontalImgCardComponent {
  @Input() backgroundColor: string = '#fbfbfb';
  @Input() imageUrl: string = "https://cdn.stocksnap.io/img-thumbs/960w/sea-beach_440EMHADYN.jpg";
}
