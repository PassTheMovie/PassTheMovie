import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _movieService: MoviesService) {
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

  }


  ngOnInit() {
  }

}