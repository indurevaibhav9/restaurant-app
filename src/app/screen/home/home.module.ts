import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [HomeComponent, ContactComponent, HowToUseComponent, PrivacyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
