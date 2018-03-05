// import { CommonModule } from '@angular/common'; // main directives
import { BrowserModule } from '@angular/platform-browser'; // run app in browser
import { FormsModule } from '@angular/forms'; // ngModel, ngSubmit -> template driven forms
import { ReactiveFormsModule } from '@angular/forms'; // reactive forms
import { HttpClientModule } from '@angular/common/http'; // request to server
import { NgModule } from '@angular/core'; // main modules

// Routing
import { RoutingConfig } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { WayBindingComponent } from './components/way-binding/way-binding.component';
import { ChildComponent } from './components/lifecycle/child/child.component';
import { CustomComponent } from './components/way-binding/custom/custom.component';
import { TestRoutingComponent } from './components/test-routing/test-routing.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { MainService } from './services/main.service';
import { Logger } from './services/logger.service';
import { ArtistDetailedComponent } from './components/artist-detailed/artist-detailed.component';


@NgModule({
  declarations: [ // templates
    AppComponent,
    LifecycleComponent,
    DirectivesComponent,
    WayBindingComponent,
    ChildComponent,
    CustomComponent,
    TestRoutingComponent,
    ArtistComponent,
    AlbumComponent,
    ArtistDetailedComponent
  ],
  imports: [ // modules
    BrowserModule,
    FormsModule,
    RoutingConfig
  ],
  providers: [
    MainService,
    Logger
  ], // services
  bootstrap: [AppComponent], // root components
  exports: [], // directives/pipes/modules
  entryComponents: [], // for first compiling
  schemas: [] // not angular properties
})
export class AppModule { }
