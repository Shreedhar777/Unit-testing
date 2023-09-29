import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  mysharedFunc(){
    console.log('Shared fun called')
  }
}
