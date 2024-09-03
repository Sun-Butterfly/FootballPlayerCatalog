import { Routes } from '@angular/router';
import {AddFootballPlayerComponent} from "./add-football-player/add-football-player.component";
import {AllFootballPlayersComponent} from "./all-football-players/all-football-players.component";
import {LayoutComponent} from "./layout/layout.component";


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'add',
        component: AddFootballPlayerComponent
      },
      {
        path: 'all',
        component: AllFootballPlayersComponent
      },
      {
        path: '**',
        redirectTo: 'add'
      }
    ]
  }
];
