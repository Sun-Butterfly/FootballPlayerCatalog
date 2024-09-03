import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AddFootballPlayerComponent} from "./add-football-player/add-football-player.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddFootballPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Каталог футболистов';
}
