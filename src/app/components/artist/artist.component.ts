import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import {Logger} from "../../services/logger.service";

@Component({
  selector: 'app-artist',
  // providers: [MainService],
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  protected artistId: number;

  constructor(public route: ActivatedRoute, public router: Router, public main: MainService ) { }

  ngOnInit() {
    console.log('All params', this.route)
    this.route.params.subscribe(data => {
      console.log('route params data', data);
      this.artistId = data.id;
    });
    // console.log('all params', this.route.params);
    this.route.parent.params.subscribe(data => {
      console.log('route parent params data', data);
    });
    console.log('Get customer', this.main.getCurrent());
  }

  goHome() {
    console.log('All route params', this.router);
    this.router.navigate(['/']);
  }

}
