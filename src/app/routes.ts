import {Routes} from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { EnterDetailsGuard } from './EnterDetailsGuard.service';

export const routes:Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component,
    canActivate: [ EnterDetailsGuard ]
  },
  { path: '**', redirectTo: '' }
]
