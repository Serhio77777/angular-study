import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { RoutingConfig } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { WayBindingComponent } from './components/way-binding/way-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    DirectivesComponent,
    WayBindingComponent
  ],
  imports: [
    BrowserModule,
    RoutingConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
