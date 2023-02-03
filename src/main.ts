import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { ApiService } from "./app/service/api.service";
import { routes } from "./main.routes";

bootstrapApplication(AppComponent, {
  providers : [
    provideRouter(routes),
    ApiService
  ]
});