import {Component, OnInit} from '@angular/core';
import {FootballPlayer, HttpService} from "../http.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-all-football-players',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './all-football-players.component.html',
  styleUrl: './all-football-players.component.scss'
})
export class AllFootballPlayersComponent implements OnInit {
  title = 'Список футболистов';
  subtitle ='Нажмите на футболиста, чтобы узнать больше информации';
  footballPlayers: FootballPlayer[] = [];
  activePlayer: number = -1;

  constructor(private http: HttpService) {
  }


  ngOnInit(): void {
    this.http.getAllFootballPlayers().subscribe(players => {
      this.footballPlayers = players;
    })
  }

  setActivePlayer(i: number) {
    if (this.activePlayer === i) {
      this.activePlayer = -1;
    } else {
      this.activePlayer = i;
    }
  }

  deleteFootballPlayer($event: MouseEvent, i: number) {
    $event.stopPropagation();
    let id = this.footballPlayers[i].id;
    this.http.deleteFootballPlayer(id).subscribe(()=>{
      this.footballPlayers = this.footballPlayers.filter(x => x.id !== id)
    })
  }
}
