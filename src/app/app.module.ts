import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './components/dynamic-form-control/dynamic-form-control.component';
import { StarRatingModule } from 'angular-star-rating';
import { DateRangeComponent } from './components/customControls/date-range/date-range.component';
import { MatDatepickerModule, MatSlideToggleModule, MatSliderModule, MatCheckboxModule, MatButtonModule, 
  MatSelectModule, MatNativeDateModule, MatRadioModule, MatInputModule } from '@angular/material';
import { RegistrationComponent } from './components/registration/registration.component';
import { DatabaseService } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';
import { ControlService } from './services/control.service';

@NgModule({
  imports: [AppRoutingModule, HttpClientModule, BrowserModule, ReactiveFormsModule, FormsModule, StarRatingModule.forRoot(),
    MatInputModule, BrowserAnimationsModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule,
    MatSelectModule, MatButtonModule, MatCheckboxModule, MatSliderModule, MatSlideToggleModule],

  declarations: [routingComponents, AppComponent, DynamicFormComponent, DynamicFormControlComponent, DateRangeComponent, RegistrationComponent],

  providers: [DatabaseService,ControlService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
