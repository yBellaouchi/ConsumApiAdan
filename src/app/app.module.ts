import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './componentes/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteDigitsPipePipe } from './pipes/delete-digits-pipe.pipe';
import { ConsumeAPiComponent } from './componentes/consume-api/consume-api.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { RemaingTimePipe } from './pipes/remaing-time.pipe';
import { ItalicDirective } from './derictives/italic.directive';
import { ConcurrencyPipe } from './pipes/concurrency.pipe';
import { BoldDirective } from './derictives/bold.directive';
import { BorderDirective } from './derictives/border.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DeleteDigitsPipePipe,
    ConsumeAPiComponent,
    RemaingTimePipe,
    ItalicDirective,
    ConcurrencyPipe,
    BoldDirective,
    BorderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
