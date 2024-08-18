import { Component, Input, OnInit } from '@angular/core';
import { Nft } from 'src/app/shared/models/nft.model';

@Component({
    selector: '[nft-single-card]',
    templateUrl: './nft-single-card.component.html',
})
export class NftSingleCardComponent implements OnInit {
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
