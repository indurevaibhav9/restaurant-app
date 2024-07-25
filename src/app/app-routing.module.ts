import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFormComponent } from './screen/onboarding/details-form/details-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'onboarding/details-form', component: DetailsFormComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
