import {Component, OnInit} from '@angular/core';
import SwiperCore, {Navigation, Pagination, SwiperOptions, EffectFade} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  banners: any[] = [];
  restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    this.banners = [
      {banner: 'assets/imgs/1.jpg'},
      {banner: 'assets/imgs/2.jpg'},
      {banner: 'assets/imgs/3.jpg'}
    ];
    this.restaurants = [
      {
        cover: 'assets/imgs/1.jpg',
        name: 'Stayfit',
        short_name: 'stayfit',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/imgs/2.jpg',
        name: 'Stayfit1',
        short_name: 'stayfit1',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        cover: 'assets/imgs/3.jpg',
        name: 'Stayfit2',
        short_name: 'stayfit2',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },

    ];
  }
  //
  // onSlideChange() {
  //   console.log('slide change');
  // }
  //
  // onSwiper($event: any) {
  //   console.log($event);
  // }
}
