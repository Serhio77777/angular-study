import { Component, OnInit } from '@angular/core';
import {ArtistComponent} from '../artist/artist.component';
import {ActivatedRoute, Router} from "@angular/router";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'app-artist-detailed',
  templateUrl: './artist-detailed.component.html',
  styleUrls: ['./artist-detailed.component.css']
})
export class ArtistDetailedComponent extends ArtistComponent implements OnInit {

  // private artistId: number
  constructor(public route: ActivatedRoute, public router: Router, public main: MainService ) {
    super(route, router, main);
  }

  ngOnInit() {
    console.log('Extended component', this.artistId);
    this.artistId = 2;
  }

}
