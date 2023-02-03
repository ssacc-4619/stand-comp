import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public counter : number = 0;

  constructor() {
    this.counter++;
  }
}
