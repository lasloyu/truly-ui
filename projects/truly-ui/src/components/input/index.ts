import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TlInput } from './input';
import { MessageValidationDirective } from './directives/messagevalidation.directive';
import { TlMessageValidationComponent } from './components/messagevalidation/messagevalidation.component';
import { CharcaseDirective } from './directives/charcase.directive';

import { ValidatorsModule } from '../validators/index';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ValidatorsModule
  ],
  declarations: [
    TlInput,
    CharcaseDirective,
    MessageValidationDirective,
    TlMessageValidationComponent,
  ],
  exports: [
    TlInput,
    CharcaseDirective,
    TlMessageValidationComponent,
    MessageValidationDirective,
  ],
  entryComponents: [TlMessageValidationComponent]
} )
export class InputModule {
}
