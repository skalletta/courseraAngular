import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import{Leader} from '../shared/leader';
import {Promotion} from '../shared/promotion';

import {DishService} from '../services/dish.service';
import {LeaderService} from '../services/leader.service';
import {PromotionService} from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  featuredLeader: Leader;
  constructor(private dishService: DishService, private promoService: PromotionService, private leaderService: LeaderService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promoService.getFeaturedPromotion();
    this.featuredLeader = this.leaderService.getFeaturedLeader();
  }


}
