import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { delay, switchMap, timeout } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { asyncScheduler } from 'rxjs/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  heroes = [1, 2, 3, 4, 6];

  constructor() {
  }

  ngOnInit() {
    const observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9])
    // .pipe(switchMap(data => of(data)))
      .subscribe((data) => {
        console.log(data);
        this.heroes.push(data);
      });
  }
}
