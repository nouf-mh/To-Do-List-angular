import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./Components/home/home.component";
import { AddComponent } from "./Components/Task/add/add.component";
import { ListComponent } from './Components/list/list.component';
import { EditTaskComponent } from './Components/Task/edit/edit-task.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent,
    children:[
      {path:'', component: ListComponent},
      {path:'list', component: ListComponent},
      {path:'update/:id' , component: EditTaskComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
