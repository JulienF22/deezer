import { Component, OnInit } from '@angular/core';
import { Album } from './component/album/album.component';
import { DeezerService } from './services/deezer.service';

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

  ngOnInit(): void {
    this.deezer.search('h').subscribe((data) => {
      let id = data[5].id;
      this.deezer.track(id).subscribe((track) => {
        this.album = track;
      });
    });
  }
}
