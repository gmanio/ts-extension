import { EventEmitter, Injectable } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  public loadable: EventEmitter<boolean> = new EventEmitter();
  private API_KEY = 'AIzaSyBvSlnkuiWfNkS19raUIYDldAEbCIdJK2I';
  private gapi = getWindow().gapi;
  private client: any;

  constructor() {
    this.gapi.load('client', () => this.onLoadClient());
  }

  private onLoadClient(): any {
    this.client = this.gapi.client;

    this.client.setApiKey(this.API_KEY);
    this.client.load('youtube', 'v3', () => this.onLoadYoutube());
  }

  private onLoadYoutube() {
    this.loadable.emit(true);
  }

  public getList = (htOption) => from(this.client.youtube.videos.list(htOption));
}
