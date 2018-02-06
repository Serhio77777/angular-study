import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

// Routing
import { RoutingConfig } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { WayBindingComponent } from './components/way-binding/way-binding.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CustomComponent } from './components/way-binding/custom/custom.component';


@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    DirectivesComponent,
    WayBindingComponent,
    ChildComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
