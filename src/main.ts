import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routes } from "./main.routes";
import { NgxsModule } from "@ngxs/store";
import { TodoState } from "./app/store/state/todo.state";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { ReactiveFormsModule } from "@angular/forms";

bootstrapApplication(AppComponent, {
  providers : [
    provideRouter(routes),
    importProvidersFrom([
      BrowserModule,
      ReactiveFormsModule,
      NgxsModule.forRoot([TodoState]),
      NgxsFormPluginModule.forRoot(),
    ])
  ]
});
