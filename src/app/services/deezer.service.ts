import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../component/album/album.component';

export interface SearchResult {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class DeezerService {
  constructor(private httpClient: HttpClient) {}

  search(text: string) {
    return this.httpClient.get<Array<SearchResult>>(
      'https://lostin70s.com/lpwebfront/api/deezer/search?q=' + text
    );
  }

  track(id: number) {
    return this.httpClient.get<Album>(
      'https://lostin70s.com/lpwebfront/api/deezer/track/' + id
    );
  }
}
