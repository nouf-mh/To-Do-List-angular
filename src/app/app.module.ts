import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Components/list/list.component';
import { DeleteTextDirective } from './delete-text.directive';
import { AddComponent } from './Components/Task/add/add.component';
import { CustomFiltterPipe } from './custom-filtter.pipe';
import { SearchBoxComponent } from './Components/layout/search-box/search-box.component';
import { HomeComponent } from './Components/home/home.component';
import { EditTaskComponent } from './Components/Task/edit/edit-task.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DeleteTextDirective,
    AddComponent,
    CustomFiltterPipe,
    SearchBoxComponent,
    HomeComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
