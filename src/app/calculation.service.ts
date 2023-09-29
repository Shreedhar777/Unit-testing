import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor(private shared:SharedService) {}

  multify(a: number, b: number) {
    this.shared.mysharedFunc();
    return a * b;
  }

  add(a: number, b: number) {
    this.shared.mysharedFunc();
    return a + b;
  }
}
