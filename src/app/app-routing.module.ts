import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarPersonaComponent } from './Components/agregar-editar-persona/agregar-editar-persona.component';
import { AgregarEditarUsuarioComponent } from './Components/agregar-editar-usuario/agregar-editar-usuario.component';
import { ListaPersonasFisicasComponent } from './Components/lista-personas-fisicas/lista-personas-fisicas.component';

const routes: Routes = [
  {path: "", component: ListaPersonasFisicasComponent },
  {path: "listado", component: ListaPersonasFisicasComponent },
  {path: "agregar", component: AgregarEditarPersonaComponent},
  {path: "editar/:idPersonaFisica", component: AgregarEditarPersonaComponent},
  {path: "agregarUsuario", component: AgregarEditarUsuarioComponent},
  {path: "editarUsuario/:id", component: AgregarEditarUsuarioComponent},
  {path: "**", redirectTo: "", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
