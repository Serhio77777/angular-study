import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ArtistDetailedComponent } from './artist-detailed.component';

import { MainService } from '../../services/main.service';
import { Logger } from '../../services/logger.service';

describe('ArtistDetailedComponent', () => {
  let component: ArtistDetailedComponent;
  let fixture: ComponentFixture<ArtistDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetailedComponent ],
      imports: [RouterTestingModule],
      providers: [
        MainService,
        Logger
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
