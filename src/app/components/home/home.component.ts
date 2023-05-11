import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public apiResponse: any;
  public charactersAPI: any;
  //public locationsAPI: any;
  //public episodesAPI: any;

  constructor(public apiService: HttpService, public sharedService: SharedService,
    public router: Router) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.apiService.charactersInfo().subscribe(data => {
      this.apiResponse = data;
      this.charactersAPI = this.apiResponse['results'];
      //debugger
    })
  }

  openCharacterDetail(v: any, i: any) {
    var value = v;
    var index = i
    this.sharedService.setAPIKeyData(value);
    this.router.navigate(['character/' + index]);
    //debugger
  }

}
