import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslationComponent } from './components/translation/translation.component';
import { PrintComponent } from './components/print/print.component';
import { FormPrintComponent } from './components/form-print/form-print.component';
import { MailingComponent } from './components/mailing/mailing.component';

const routes: Routes = [

  { path: '', component: MailingComponent },
  { path: 'form/print', component: FormPrintComponent },
  { path: 'print', component: PrintComponent },
  { path: 'translate', component: TranslationComponent },
  { path: 'side', loadComponent: () => import('./components/sidebar/sidebar.component').then((e)=>e.SidebarComponent) },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
