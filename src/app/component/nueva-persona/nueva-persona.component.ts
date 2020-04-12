import { Component, OnInit } from '@angular/core';

//importamos formbuilder formgroup y validators
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.scss']
})
export class NuevaPersonaComponent implements OnInit {

  nuevaPersona: FormGroup;
  submitted = false;
  visible = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    //validaciones
    this.nuevaPersona = this.formBuilder.group({
      nombre: ['',[Validators.required, Validators.minLength(4)]],
      apellido: ['',[Validators.required, Validators.minLength(4)]]
      
    });
  }

  get formulario(){
    return this.nuevaPersona.controls;
  }

  //funcion enviar correo
  onSubmit(){
    this.submitted = true;

    //si tiene algun error se sale
    if(this.nuevaPersona.invalid){
      return;
    }

    let persona = this.nuevaPersona.value;
    persona.mayorEdad = false;

    alert("nueva persona ok");
    
    this.onReset();
  }

  onReset(){
    this.submitted = false;
    //resetea formulario
    this.nuevaPersona.reset();
  }

}
