import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StudentManagementService} from './services/student-management.service';
import { StudentDetailsComponent } from './student-details/student-details/student-details.component';
import {StudentComponent} from './student-component/student-component.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: StudentComponent
      },
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
      },
      {
        path: 'details/:index',
        component: StudentDetailsComponent
      }
      ])
  ],
  providers: [StudentManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
