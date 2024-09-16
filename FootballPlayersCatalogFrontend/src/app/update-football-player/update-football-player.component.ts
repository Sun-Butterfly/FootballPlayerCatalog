import {Component, OnInit} from '@angular/core';
import {FootballPlayer, HttpService, Team} from "../http.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-update-football-player',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './update-football-player.component.html',
  styleUrl: './update-football-player.component.scss'
})
export class UpdateFootballPlayerComponent implements OnInit {

  playerFormGroup: FormGroup;
  countries: string[] = [];
  genders: string[] =[];
  teams:Team[]=[];
  footballPlayers: FootballPlayer[] = [];
  activePlayer: number = -1;

  constructor(private http: HttpService) {
    this.playerFormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      teamName: new FormControl(null, [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.http.getAllCountries().subscribe(countries=>{
      this.countries = countries;
    })
    this.http.getAllGenders().subscribe(genders=>{
      this.genders = genders;
    })
    this.http.getAllTeams().subscribe(teams=>{
      this.teams = teams;
    })
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

  updateFootballPlayer($event: MouseEvent, i: number) {
    $event.stopPropagation();
    let footballPlayer = this.footballPlayers[i];
    this.http.updateFootballPlayer(footballPlayer).subscribe(() => {
      alert('Успешно отправлено')
    })
  }

  getActivePlayer(i: number) : FootballPlayer {
    let footballPlayer = this.footballPlayers[i];
    return footballPlayer;
  }
}
