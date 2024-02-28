import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-music',
  templateUrl: './loading-music.component.html',
  styleUrls: ['./loading-music.component.scss'],
})
export class LoadingMusicComponent  implements OnInit {
  dummy = Array(5)
  constructor() { }

  ngOnInit() {}

}
