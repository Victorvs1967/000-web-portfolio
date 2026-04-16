import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlsComponent } from '../controls/controls.component';

@Component({
<<<<<<< Updated upstream
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {

}
=======
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [RouterOutlet, ControlsComponent]
})
export class MainComponent {

}
>>>>>>> Stashed changes
