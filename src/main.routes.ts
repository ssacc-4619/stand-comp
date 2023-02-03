import { Routes } from '@angular/router';

export const routes : Routes = [
    {
      path : 'sorpresa',
      loadComponent : () => import('src/app/components/clicker-button/clicker-button.component')
        .then(r => r.ClickerButtonComponent)
    }
];