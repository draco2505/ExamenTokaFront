import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PersonaFisica } from 'src/app/interfaces/PersonaFisica';
import { PersonaFisicaServiceService } from 'src/app/Services/persona-fisica-service.service';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  accion = "agregar";
  idPersonaFisica = 0;
  personaFisica: PersonaFisica | undefined
  agregarPersona:FormGroup;
  
  constructor(private fb: FormBuilder,
              private _personaService : PersonaFisicaServiceService,
              private router :  Router,
              private aRoute : ActivatedRoute) { 
    this.agregarPersona = this.fb.group({
      Nombre:['', Validators.required],
      ApellidoPaterno:['', Validators.required],
      ApellidoMaterno:['', Validators.required],
      RFC:['', Validators.required],
      FechaNacimiento:['', Validators.required] 
    });
    this.idPersonaFisica = +this.aRoute.snapshot.paramMap.get('idPersonaFisica')!;
    console.log(this.aRoute.snapshot.paramMap);
  }

  ngOnInit(): void {
    this.tipoTransaccion();
  }
  
  tipoTransaccion(){
    if(this.idPersonaFisica !== 0){
      this.accion = "Editar";
      this._personaService.getPersonaFisicaByID(this.idPersonaFisica).subscribe(data =>{
        this.personaFisica = data;
        this.agregarPersona.patchValue({
          Nombre: data.nombre,
          ApellidoPaterno: data.apellidoPaterno,
          ApellidoMaterno: data.apellidoMaterno,
          RFC: data.rfc,
          FechaNacimiento: formatDate(data.fechaNacimiento, 'dd/MM/yyyy', 'en')
        });
      }, error => {
        console.log(error);
      });
      
    }
  }


  agregarEditar(){
    if(this.personaFisica == undefined){
      console.log(this.agregarPersona);
      const persona: PersonaFisica = {
        nombre: this.agregarPersona.get('Nombre')?.value,
        apellidoPaterno: this.agregarPersona.get('ApellidoPaterno')?.value,
        apellidoMaterno: this.agregarPersona.get('ApellidoMaterno')?.value,
        rfc: this.agregarPersona.get('RFC')?.value,
        fechaNacimiento:this.agregarPersona.get('FechaNacimiento')?.value,
        usuarioAgrega: 1,
        activo: true
      };
      this._personaService.agregarPersonaFisica(persona).subscribe(data => {
        this.router.navigate(["/listado"]);
      }, error => {
        console.log(error);
      });
    }
    else {
      const fechaSplit = this.agregarPersona.get('FechaNacimiento')?.value.toString().split('/');
      const persona: PersonaFisica = {
        idPersonaFisica: this.personaFisica.idPersonaFisica,
        fechaRegistro: this.personaFisica.fechaRegistro,
        fechaActualizacion: new Date,
        nombre: this.agregarPersona.get('Nombre')?.value,
        apellidoPaterno: this.agregarPersona.get('ApellidoPaterno')?.value,
        apellidoMaterno: this.agregarPersona.get('ApellidoMaterno')?.value,
        rfc: this.agregarPersona.get('RFC')?.value,
        fechaNacimiento: new Date(Number(fechaSplit[2]), Number(fechaSplit[1]) -1, Number(fechaSplit[0])),
        usuarioAgrega: 1,
        activo: true
      };
      console.log(this.agregarPersona.get('FechaNacimiento')?.value);
      console.log(fechaSplit);
      this._personaService.putPersonaFisica(this.idPersonaFisica, persona).subscribe(data => {
        this.router.navigate(['/']);  
      }, error => {
        console.log(error);
      });

    }
  }


 

}
