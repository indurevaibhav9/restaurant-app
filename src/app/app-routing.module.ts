import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'onboarding/details-form',
    loadChildren: ()=> import('./screen/onboarding/onboarding.module').then((module)=>module.OnboardingModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./screen/home/home.module').then((module)=>module.HomeModule)
  },
  {
    path: 'all-restaurants',
    loadChildren: ()=>import('./screen/all-restros/all-restros.module').then((module)=>module.AllRestrosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
