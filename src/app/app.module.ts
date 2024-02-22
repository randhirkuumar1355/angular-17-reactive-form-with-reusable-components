import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule, appRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseService } from './shared/services/base.service';
import { EmployeeService } from './shared/services/employee.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    appRouting
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BaseService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
