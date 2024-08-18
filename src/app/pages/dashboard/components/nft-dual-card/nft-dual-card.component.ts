import { Component, Input, OnInit } from '@angular/core';
import { Nft } from 'src/app/shared/models/nft.model';

@Component({
  selector: '[nft-dual-card]',
  templateUrl: './nft-dual-card.component.html',
})
export class NftDualCardComponent implements OnInit {
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
