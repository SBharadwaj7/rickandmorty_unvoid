import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public apiResponse: any;
  public charactersAPI: any;
  public locationsAPI: any;
  public episodesAPI: any;

  constructor(private http: HttpClient) {
    this.getPrincipalAPI();
  }

  public getPrincipalAPI() {
    this.http.get('https://rickandmortyapi.com/api').subscribe(data => {
      this.apiResponse = data;
      this.charactersAPI = this.apiResponse.characters;
      this.locationsAPI = this.apiResponse.locations;
      this.episodesAPI = this.apiResponse.episodes;
      //debugger
    });

  }

  public charactersInfo() {
    //debugger
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  public locationsInfo() {
    return this.http.get('https://rickandmortyapi.com/api/location');
  }


  public epidosdesInfo() {
    return this.http.get('https://rickandmortyapi.com/api/episode');
  }
}
