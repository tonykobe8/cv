import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule} from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, NavComponent],
 imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
 
  bootstrap: [AppComponent]
})
export class AppModule {}
