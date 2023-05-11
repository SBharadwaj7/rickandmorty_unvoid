import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private viewCharacterData = new BehaviorSubject<string>('');
  apiKeyObservable = this.viewCharacterData.asObservable();

  setAPIKeyData(ViewData: any) {
    this.viewCharacterData.next(ViewData);
  }

}
