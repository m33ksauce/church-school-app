import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../services/classes.service';
import { Classroom } from '../models/classroom';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  classService: ClassesService;
  rooms: Array<Classroom>;

  constructor(classService: ClassesService) {
    this.classService = classService;
    this.rooms = new Array<Classroom>();
  }

  ngOnInit() {
    this.loadClasses();
  }

  clearClasses() {
    this.rooms = new Array<Classroom>();
  }

  loadClasses() {
    this.clearClasses();
    this.classService.getClasses().subscribe(c => {
      this.rooms.push(c);
    });
  }

  canCheckIn(room: Classroom): boolean {
    return room.getAvailable() > 0;
  }

  checkIn(room: Classroom) {
    this.classService.checkInClass(room.ID);
    this.loadClasses();
  }

  checkOut(room: Classroom) {
    this.classService.checkOutClass(room.ID);
    this.loadClasses();
  }
}
