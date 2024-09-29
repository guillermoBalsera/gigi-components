import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'Gigi-round-button',
  standalone: true,
  imports: [],
  templateUrl: './gigi-round-button.component.html',
  styleUrl: './gigi-round-button.component.css'
})
export class GigiRoundButtonComponent implements OnInit{
  @Input() name: string = "Action";
  @Input() type: string = "";

  public className: string = `gigi-button`;

  ngOnInit(): void {
    switch (this.type.toLowerCase()) {
      case "primary": {
        this.className = `gigi-round-button primary`;
        break;
      }
      case "danger": {
        this.className = `gigi-round-button danger`;
        break;
      }
      case "warning": {
        this.className = `gigi-round-button warning`;
        break;
      }
      case "success": {
        this.className = `gigi-round-button success`;
        break;
      }
      default: {
        this.className = `gigi-round-button basic`;
        break;
      }
    }
  }
}
