import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslationComponent } from './components/translation/translation.component';
import { PrintComponent } from './components/print/print.component';

const routes: Routes = [

  { path: '', component: PrintComponent },
  { path: 'translate', component: TranslationComponent },
  { path: 'side', loadComponent: () => import('./components/sidebar/sidebar.component').then((e)=>e.SidebarComponent) },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
