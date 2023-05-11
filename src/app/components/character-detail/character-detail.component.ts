import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  public response: any;
  public characterDetails: any;
  public locationsAPI: any;
  public episodesAPI: any;

  constructor(public apiService: HttpService, public sharedService: SharedService, public router: Router) { }

  ngOnInit(): void {
    this.sharedService.apiKeyObservable.subscribe(data => {
      this.characterDetails = data;
      if ((this.characterDetails == '') || (this.characterDetails == null)) {
        this.router.navigateByUrl('');
      }
      //debugger
    })
  }

  

}

