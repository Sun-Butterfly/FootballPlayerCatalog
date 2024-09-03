import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [
        RouterOutlet
    ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  title = 'Каталог футболистов';

  url: string = '';

  constructor(private router: Router) {

  }

  goToAdd() {
    this.router.navigate(['add'])
  }

  goToAll() {
    this.router.navigate(['all'])
  }

  ngOnInit(): void {
    this.url = this.router.url;
    this.router.events.subscribe(x => {
      this.url = this.router.url
    });
  }
}
