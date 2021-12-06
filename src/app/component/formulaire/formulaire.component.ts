import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeezerService } from 'src/app/services/deezer.service';

import { Album } from '../album/album.component';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  @Output() track = new EventEmitter();
  recherche: string;
  constructor(private deezer: DeezerService) {}
  submitsimple() {
    this.deezer.search(this.recherche).subscribe((data) => {
      this.track.emit(data[0]);
    });
  }
  ngOnInit(): void {}
}
