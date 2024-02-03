import { Component, OnInit } from '@angular/core';
import { Person } from "../person";
import { PersonLsService } from "../person-ls.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  people: Person[] = [];

  constructor(
    private personLsService: PersonLsService,
  ) {
  }

  ngOnInit() {
    this.people = this.personLsService.getAll();
  }

  delete(index: number) {
    if (confirm("Jestes pewny?")) {
      this.personLsService.deletePerson(index);
      this.people = this.personLsService.getAll();
    }
  }
}
