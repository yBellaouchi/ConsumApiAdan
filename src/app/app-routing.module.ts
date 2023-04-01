import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./componentes/form/form.component";
import {ConsumeAPiComponent} from "./componentes/consume-api/consume-api.component";

const routes: Routes = [
  {path:'Q1',component:FormComponent},
  {path:'Q2',component:ConsumeAPiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
