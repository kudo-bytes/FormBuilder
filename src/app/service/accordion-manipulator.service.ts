import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordionManipulatorService {

  // constructor() { }

  callToggle = new Subject();
}
