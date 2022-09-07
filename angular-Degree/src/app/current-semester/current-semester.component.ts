import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/interfaces/Catalog.interface';
import { CurrentSemesterService } from '../services/CurrentSemester.service';

@Component({
  selector: 'app-current-semester',
  templateUrl: './current-semester.component.html',
  styleUrls: ['./current-semester.component.scss'],
})
export class CurrentSemesterComponent implements OnInit {
  catalog: Catalog = {
    communication: [],
    americanHistoryI: [],
    americanHistoryII: [],
    polSciI: [],
    polSciII: [],
    arts: [],
    lpc: [],
    socialSci: [],
    tecm: [],
    mathCore: [],
    lifeSci: [],
    req: [],
    core: [],
    breadth: [],
    electives: [],
    capstone: [],
  };
  cart: string[] = [];
  constructor(private currentSemesterService: CurrentSemesterService) {}
  ngOnInit(): void {
    this.getCatalog();
  }
  getCatalog() {
    this.currentSemesterService.getCatalog().subscribe((res) => {
      this.catalog = <Catalog>res;
    });
  }
  addToCart(subject: string): void {
    if (this.cart.indexOf(subject) === -1 && this.cart.length <= 6) {
      this.cart.push(subject);
      console.log(this.cart);
    }
  }
}
