import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';

import { GuestService } from '../guest.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  guestList$ = this.guestService.guests$;

  elementType: NgxQrcodeElementTypes.URL | NgxQrcodeElementTypes.CANVAS | NgxQrcodeElementTypes.IMG; //'url' | 'canvas' | 'img' = 'url';

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

}
