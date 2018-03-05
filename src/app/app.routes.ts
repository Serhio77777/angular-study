import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { WayBindingComponent } from './components/way-binding/way-binding.component';
import {TestRoutingComponent} from "./components/test-routing/test-routing.component";
import {AlbumComponent} from './components/album/album.component';
import {ArtistComponent} from "./components/artist/artist.component";

export const routes: Routes = [
  {
    path: 'lifecycle',
    component: LifecycleComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'way-binding',
    component: WayBindingComponent
  },
  {
    path: 'routing/:date',
    component: TestRoutingComponent,
    children: [
      {
        path: 'artists/:id/:number/:value',
        component: ArtistComponent
      },
      {
        path: 'albums/:id',
        component: AlbumComponent
      }
    ]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }, //TODO: 404 page
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingConfig {
}
