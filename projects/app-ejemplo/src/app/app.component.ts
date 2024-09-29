import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GigiCardComponent} from "../../../gigi/src/lib/gigi/components/gigi-card/gigi-card.component";
import {GigiImgCardComponent} from "../../../gigi/src/lib/gigi/components/gigi-img-card/gigi-img-card.component";
import {GigiButtonComponent} from "../../../gigi/src/lib/gigi/components/gigi-button/gigi-button.component";
import {
  GigiRoundButtonComponent
} from "../../../gigi/src/lib/gigi/components/gigi-round-button/gigi-round-button.component";
import {
  GigiHorizontalImgCardComponent
} from "../../../gigi/src/lib/gigi/components/gigi-horizontal-img-card/gigi-horizontal-img-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GigiCardComponent, GigiImgCardComponent,
    GigiButtonComponent, GigiRoundButtonComponent, GigiHorizontalImgCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'app-ejemplo';
}
