import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GigiCardComponent} from "../../../gigi/src/lib/gigi/components/gigi-card/gigi-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GigiCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-ejemplo';
}
