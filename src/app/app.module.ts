import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AgregarEditarPersonaComponent } from './Components/agregar-editar-persona/agregar-editar-persona.component';
import { ListaPersonasFisicasComponent } from './Components/lista-personas-fisicas/lista-personas-fisicas.component';
import { AgregarEditarUsuarioComponent } from './Components/agregar-editar-usuario/agregar-editar-usuario.component';
import { ListaUsuarioComponent } from './Components/lista-usuario/lista-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarPersonaComponent,
    ListaPersonasFisicasComponent,
    AgregarEditarUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
