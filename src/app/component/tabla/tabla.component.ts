import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  personas: Array<Persona>;

  constructor() {
    this.personas =[
      new Persona("Perico", "De los Palotes", false),
      new Persona("Rogelia", "Martinez", true),
      new Persona("Estusia", "Martinez", true),
    ];
  }

  ngOnInit(): void {

  }

}
