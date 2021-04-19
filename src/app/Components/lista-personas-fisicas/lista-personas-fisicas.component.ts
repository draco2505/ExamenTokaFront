import { Component, OnInit } from '@angular/core';
// import { threadId } from 'node:worker_threads';
import { PersonaFisica } from 'src/app/interfaces/PersonaFisica';
import { PersonaFisicaServiceService } from 'src/app/Services/persona-fisica-service.service';

@Component({
  selector: 'app-lista-personas-fisicas',
  templateUrl: './lista-personas-fisicas.component.html',
  styleUrls: ['./lista-personas-fisicas.component.css']
})
export class ListaPersonasFisicasComponent implements OnInit {

  ListaPersonas: PersonaFisica[] = [];
  errorBack = "";
  constructor(private _personaService: PersonaFisicaServiceService) { }

  ngOnInit(): void {
   this.getPersonasFisicas();
  }

  getPersonasFisicas(){
    this._personaService.getListaPersonas().subscribe(data =>{
      console.log(data);
      this.ListaPersonas = data;
      console.log(this.ListaPersonas);
    }, error => {
      this.errorBack = error;
    });
  }

  getPersonaFisicaByID(idPersonaFisica: any){
    this._personaService.getPersonaFisicaByID(idPersonaFisica).subscribe(data => 
      {

      }, error =>{
       console.log(error); 
      });
  }

  deletePersonaFisica(idPersonaFisica: any){
    this._personaService.deletePersonaFisica(idPersonaFisica).subscribe(data =>
    {
      this.getPersonasFisicas();
    }, error => {
      console.log(error);
    });
  }

}
