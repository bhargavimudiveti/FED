import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EpisodesComponent } from './episodes/episodes.component';

const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'home', component:HeaderComponent},
  {path:'inspiration', component:InspirationComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'episodes' , component:EpisodesComponent},
  { path: 'home',pathMatch: 'full', component:  HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
