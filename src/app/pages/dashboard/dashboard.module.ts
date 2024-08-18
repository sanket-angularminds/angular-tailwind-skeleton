import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NftAuctionsTableComponent } from './components/nft-auctions-table/nft-auctions-table.component';
import { NftAuctionsTableItemComponent } from './components/nft-auctions-table-item/nft-auctions-table-item.component';
import { NftDualCardComponent } from './components/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from './components/nft-header/nft-header.component';
import { NftSingleCardComponent } from './components/nft-single-card/nft-single-card.component';
import { NftComponent } from './components/nft/nft.component';
import { RouterOutlet } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NftChartCardComponent } from './components/nft-chart-card/nft-chart-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    DashboardComponent,
    NftAuctionsTableComponent,
    NftAuctionsTableItemComponent,
    NftDualCardComponent,
    NftHeaderComponent,
    NftSingleCardComponent,
    NftComponent,
    NftChartCardComponent,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    CurrencyPipe,
    RouterOutlet,
    DashboardRoutingModule,
    NgApexchartsModule,
  ],
})
export class DashboardModule {}
