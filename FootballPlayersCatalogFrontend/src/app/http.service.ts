import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

export interface FootballPlayer {
  id: number;
  name: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  country: string;
  teamName: string;
}

export interface Team {
  id: number;
  name:string;
}

@Injectable({providedIn: "root"})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:5288'
  addFootballPlayer(footballPlayer: FootballPlayer): Observable<void> {

    const url: string = `${this.baseUrl}/FootballPlayer/Add`
    return this.http.post<void>(url, footballPlayer);
  }

  getAllCountries(): Observable<string[]>{
    const url: string = `${this.baseUrl}/Dictionary/GetAllCountries`;
    return this.http.get<string[]>(url);
  }
  getAllGenders(): Observable<string[]>{
    const url: string = `${this.baseUrl}/Dictionary/GetAllGenders`;
    return this.http.get<string[]>(url);
  }

  getAllFootballPlayers():Observable<FootballPlayer[]>{
    const url:string = `${this.baseUrl}/FootballPlayer/GetAll`;
    return this.http.get<FootballPlayer[]>(url);
  }

  getAllTeams():Observable<Team[]> {
    const url:string=`${this.baseUrl}/Team/GetAll`
    return this.http.get<Team[]>(url);
  }
  deleteFootballPlayer(id: number): Observable<void> {
    const url: string = `${this.baseUrl}/FootballPlayer/Delete`
    return this.http.delete<void>(url, {
      params: {
        id: id
      }
    });
  }

  updateFootballPlayer(footballPlayer: FootballPlayer): Observable<void> {
    const url:string=`${this.baseUrl}/FootballPlayer/Update`
    return this.http.post<void>(url, footballPlayer);
  }
}
