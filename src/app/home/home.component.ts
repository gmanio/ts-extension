import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { from } from 'rxjs/internal/observable/from';
import { concatMap, delay, map, switchMap, throttleTime, timeout } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { interval } from 'rxjs/internal/observable/interval';
import { timer } from 'rxjs/internal/observable/timer';
import { zip } from 'rxjs/internal/observable/zip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  heroes = [1, 2, 3, 4, 6];
  //http://supportportal.skplanet.com/Cafeteria/User/WeekMenu.aspx?Date=20180902
  constructor(private http: HttpClient) {
    this.http.get('http://supportportal.skplanet.com/Cafeteria/User/WeekMenu.aspx?Date=20180902')
      .subscribe((data)=>{
        debugger;
      })
  }

  ngOnInit() {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9])
      .pipe(()=>interval(1000))
      .subscribe((val) => {
        console.log(val);
        this.heroes.push(val);
      });
  }
}
