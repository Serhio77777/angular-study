import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { WayBindingComponent } from './components/way-binding/way-binding.component';

export const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
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
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }, //TODO: 404 page
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingConfig {
}
