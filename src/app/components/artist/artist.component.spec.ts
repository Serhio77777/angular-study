import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ArtistComponent } from './artist.component';
import { ArtistDetailedComponent } from '../artist-detailed/artist-detailed.component';

import { MainService } from '../../services/main.service';
import { Logger } from '../../services/logger.service';


describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistComponent, ArtistDetailedComponent ],
      imports: [RouterTestingModule],
      providers: [
        MainService,
        Logger
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
