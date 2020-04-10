import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  personas: any[];
  
  constructor() {
    this.personas = [];
    this.personas.push({
      nombre: "Perico",
      apellido: "De los Palotes",
      mayorEdad: false
    });

    this.personas.push({
      nombre: "Rogelia",
      apellido: "Martinez",
      mayorEdad: true
    });
   }

  ngOnInit(): void {
  
  }

}
