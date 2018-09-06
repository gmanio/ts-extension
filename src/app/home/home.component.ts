import { AfterViewInit, Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { YoutubeService } from '../services/youtube.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { combineAll, delay, map, merge, mergeAll, mergeMap, scan, share, switchMap, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { interval } from 'rxjs/internal/observable/interval';
import { from } from 'rxjs/internal/observable/from';
import { zip } from 'rxjs/internal/observable/zip';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  public videos$;

  constructor(private youtube: YoutubeService) {
  }

  ngOnInit() {
    // async video array
    this.videos$ = from([1, 2, 3]).pipe(
      map(x => {
        console.log('test');
        console.log(x);
        return x + x;
      }),
      toArray()
    );


    this.videos$ = this.youtube.loadable
      .pipe(
        map(isAvailable => {
          if ( isAvailable ) {
            const htOption = {
              part: 'snippet',
              chart: 'mostPopular',
              regionCode: 'KR',
              maxResults: '20'
            };

            return of(this.youtube.getList(htOption));
          }
        }),
        map((response) => {
          debugger;
        })
      );
    // .pipe(map(isAvailable => {
    //   // if ( isAvailable ) {
    //   //   const htOption = {
    //   //     part: 'snippet',
    //   //     chart: 'mostPopular',
    //   //     regionCode: 'KR',
    //   //     maxResults: '20'
    //   //   };
    //   //   return of([1,2,3])
    //   // }
    //   return of([1])
    //   // .pipe(map((response: { result: { items: any[] } }) => {
    //   //   debugger;
    //   //   return response;
    //   // }));
    // }))
//       .subscribe(isAvailable => {
//         if ( isAvailable ) {
//           const htOption = {
//             part: 'snippet',
//             chart: 'mostPopular',
//             regionCode: 'KR',
//             maxResults: '20'
//           };

//           this.videos$.next([1, 2, 3]);
//           //this.youtube.getList(htOption);
//           // .pipe(map((response: { result: { items: any[] } }) => {
//           //   debugger;
//           //   return response;
//           // }));
//         }
//       });
  }

}
