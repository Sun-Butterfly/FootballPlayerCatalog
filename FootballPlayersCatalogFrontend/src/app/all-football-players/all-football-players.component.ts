import {Component, OnInit} from '@angular/core';
import {FootballPlayer, HttpService} from "../http.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {UpdateFootballPlayerComponent} from "../update-football-player/update-football-player.component";


@Component({
  selector: 'app-all-football-players',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe,
    ReactiveFormsModule,
    UpdateFootballPlayerComponent
  ],
  templateUrl: './all-football-players.component.html',
  styleUrl: './all-football-players.component.scss'

})
export class AllFootballPlayersComponent implements OnInit {
  title = 'Список футболистов';
  subtitle ='Нажмите на футболиста, чтобы узнать больше информации';
  footballPlayers: FootballPlayer[] = [];
  activePlayer: number = -1;
  editMode: boolean = false;
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

  changeEditMode() {
    if(!this.editMode){
      this.editMode = true;
    }
    else{
      this.editMode = false;
    }
  }

  protected readonly UpdateFootballPlayerComponent = UpdateFootballPlayerComponent;
}
