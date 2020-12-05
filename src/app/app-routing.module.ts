import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReferenceComponent } from './reference/reference.component';
const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path:'' ,component:HomeComponent},
 {path:'home' ,component: HomeComponent},
{path:'about' ,component: AboutComponent},
  {path:'contact' ,component: ContactComponent}
  ,
  {path:'education' ,component:EducationComponent},
  {path:'experience' ,component: ExperienceComponent},
  {path:'reference',component: ReferenceComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
