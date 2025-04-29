import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FormComponent } from './app/pages/form/form.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: FormComponent },
    ]),
    provideHttpClient()
  ]
});