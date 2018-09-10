import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})

export class HomeCardComponent implements OnInit {
  @Input() video;

  constructor() {

  }

  ngOnInit() {
  }
}
