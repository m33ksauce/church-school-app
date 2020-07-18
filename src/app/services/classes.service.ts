import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Classroom } from '../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  myClasses: Array<Classroom> = new Array<Classroom>()

  constructor() { 
    this.myClasses.push(
      new Classroom(1001, "Sanctuary", 20, 20, false));
    this.myClasses.push(
      new Classroom(1002, "Fellowship Hall", 10, 2, false));
    this.myClasses.push(
      new Classroom(1003, "Education Center #1", 5, 0, false));
  }

  getClasses(): Observable<Classroom> {
    return from(this.myClasses);
  }

  checkInClass(id: number) {
    let classIndex = this.myClasses.findIndex(c => c.ID == id);
    this.myClasses[classIndex].Checkins++;
    this.myClasses[classIndex].isCheckedIn = true;
  }

  checkOutClass(id: number) {
    let classIndex = this.myClasses.findIndex(c => c.ID == id);
    this.myClasses[classIndex].Checkins--;
    this.myClasses[classIndex].isCheckedIn = false;
  }
}
