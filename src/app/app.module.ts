import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { AppComponent } from './app.component'
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DoomsafePipe } from './pipes/doomsafe.pipe';
import { PasswordPipe } from './pipes/password.pipe';
// Registre datos globales para ser utilizados internamente por Angular.

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DoomsafePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  //agregar internalizacion en español
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
