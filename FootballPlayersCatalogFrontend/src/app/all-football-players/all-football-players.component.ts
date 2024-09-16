import {Component, OnInit} from '@angular/core';
import {FootballPlayer, HttpService, Team} from "../http.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-all-football-players',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe,
    ReactiveFormsModule,
  ],
  templateUrl: './all-football-players.component.html',
  styleUrl: './all-football-players.component.scss'

})
export class AllFootballPlayersComponent implements OnInit {
  title = 'Список футболистов';
  subtitle ='Нажмите на футболиста, чтобы узнать больше информации';
  playerFormGroup: FormGroup;
  footballPlayers: FootballPlayer[] = [];
  countries: string[] = [];
  genders: string[] =[];
  teams:Team[]=[];
  activePlayer: number = -1;
  editMode: boolean = false;
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

  deleteFootballPlayer($event: MouseEvent, i: number) {
    $event.stopPropagation();
    let id = this.footballPlayers[i].id;
    this.http.deleteFootballPlayer(id).subscribe(()=>{
      this.footballPlayers = this.footballPlayers.filter(x => x.id !== id)
    })
  }

  updateFootballPlayer($event: MouseEvent, i: number) {
    $event.stopPropagation();
    let footballPlayer = {...this.footballPlayers[i],...this.playerFormGroup.value};
    this.http.updateFootballPlayer(footballPlayer).subscribe(() => {
      alert('Успешно отправлено')
    })
  }

  changeEditMode(i : number) {
    if(!this.editMode){
      this.editMode = true;
      console.log(this.footballPlayers, this.activePlayer)
      this.playerFormGroup.patchValue(this.footballPlayers[i])
    }
    else{
      this.editMode = false;
    }
  }
}

