import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'Gigi-button',
  standalone: true,
  imports: [],
  templateUrl: './gigi-button.component.html',
  styleUrl: './gigi-button.component.css'
})
export class GigiButtonComponent implements OnInit {
  @Input() name: string = "Action";
  @Input() type: string = "";

  public className: string = `gigi-button`;

  ngOnInit(): void {
    switch (this.type.toLowerCase()) {
      case "primary": {
        this.className = `gigi-button primary`;
        break;
      }
      case "danger": {
        this.className = `gigi-button danger`;
        break;
      }
      case "warning": {
        this.className = `gigi-button warning`;
        break;
      }
      case "success": {
        this.className = `gigi-button success`;
        break;
      }
      default: {
        this.className = `gigi-button basic`;
        break;
      }
    }
  }

}
