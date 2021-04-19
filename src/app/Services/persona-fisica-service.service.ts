import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaFisica } from '../interfaces/PersonaFisica';
@Injectable({
  providedIn: 'root'
})
export class PersonaFisicaServiceService {
  private UrlApp = "https://localhost:44345/";
  private urlApi = "api/PersonaFisica/";
  constructor(private http: HttpClient) { }

  getListaPersonas(): Observable<any>{
     return this.http.get(this.UrlApp + this.urlApi);
  }

  getPersonaFisicaByID(idPersonaFisica: number): Observable<any>{
    return this.http.get(this.UrlApp + this.urlApi + idPersonaFisica);
  }

  deletePersonaFisica(idPersonaFisica :  number) : Observable<any>{
    return this.http.delete(this.UrlApp + this.urlApi + "DeletePersonaFisicaSP/"+idPersonaFisica);
  }

  agregarPersonaFisica(persona: PersonaFisica) : Observable<any>{
    return this.http.post(this.UrlApp + this.urlApi + "PostPersonaFisicaSP/", persona);
  }
  
  putPersonaFisica(idPersona : number, persona : PersonaFisica) : Observable<any>{
    return this.http.put(this.UrlApp+this.urlApi+ "PutPersonaFisicaSP/"+ idPersona, persona);
  }  
}
