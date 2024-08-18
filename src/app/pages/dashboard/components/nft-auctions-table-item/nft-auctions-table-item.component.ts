import { Component, Input, OnInit } from '@angular/core';
import { Nft } from 'src/app/shared/models/nft.model';

@Component({
    selector: '[nft-auctions-table-item]',
    templateUrl: './nft-auctions-table-item.component.html',
})
export class NftAuctionsTableItemComponent implements OnInit {
  @Input() auction = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
