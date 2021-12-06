import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Album {
  id: number;
  title: string;
  title_short: string;
  duration: number;
  rank: number;
  date?: number;
  bpm: number;
  artist: {
    id: number;
    name: string;
    link: string;
    picture: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
  };
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  myPicture = '';

  constructor() {}
  @Input() data: Album;
  @Output() albumClick = new EventEmitter();
  mouseover(event: MouseEvent) {
    console.log(event);
  }

  ngOnInit(): void {
    this.myPicture = this.data.album.cover;
  }
}
