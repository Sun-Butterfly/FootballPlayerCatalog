import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpService, Team} from "../http.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-add-football-player',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgForOf],
  templateUrl: './add-football-player.component.html',
  styleUrl: './add-football-player.component.scss'
})
export class AddFootballPlayerComponent implements OnInit{
  title = 'Введите данные футболиста';

  playerFormGroup: FormGroup;
  countries: string[] = [];
  genders: string[] =[];
  teams:Team[]=[];
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
  }

  addFootballPlayer() {

    let value = this.playerFormGroup.value;

    console.log(value);

    this.http.addFootballPlayer(value)
      .subscribe(() => {
        alert('Успешно отправлено')
      })
  }

}
