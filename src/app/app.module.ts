import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from './github/github.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GithubComponent,
    TemplateFormComponent,
    FormDebugComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
