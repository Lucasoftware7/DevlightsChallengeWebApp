import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

//JSON IMPORT
//import dealsDataset from 'src/assets/json/dealsDataset.json';
//Import backend API service.
import { ApiService } from '../Services/api.service';
@Component({
  selector: 'app-itembox',
  templateUrl: './itembox.component.html',
  styleUrls: ['./itembox.component.scss']
})

export class ItemboxComponent implements OnInit {
  deals!: any[]
  constructor(private apiService: ApiService) { }

  faStar = faStar;
  dealsPercentage(n1: string, n2: string) {
    const NormalPrice = parseFloat(n1);
    const SalePrice = parseFloat(n2)
    const Difference = NormalPrice - SalePrice
    const value = (Difference / NormalPrice) * 100;

    return Math.round(value);
  }
  ngOnInit(): void {
    this.apiService.getDeals().subscribe(data => {
      this.deals = data;
    });
    //gamesList: { internalName: string, title: string, metacriticLink: string, dealID: string, storeID: string, gameID: string, salePrice: string, normalPrice: string, isOnSale: string, savings: string, metacriticScore: string, steamRatingText: string, steamRatingPercent: string, steamRatingCount: string, steamAppID: string, releaseDate: number, lastChange: number, dealRating: string, thumb: string } [] = dealsDataset;
    //games: any = dealsDataset;

  }
}
