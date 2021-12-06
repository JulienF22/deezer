import { Component, OnInit } from '@angular/core';
import { Album } from './component/album/album.component';
import { DeezerService, SearchResult } from './services/deezer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'deezer';
  album: Album;
  constructor(private deezer: DeezerService) {}

  onAlbumClick(event: boolean) {
    console.log(event);
  }
  requestTrack(track: SearchResult) {
    this.deezer.track(track.id).subscribe((album) => {
      this.album = album;
    });
  }

  ngOnInit(): void {}
}
