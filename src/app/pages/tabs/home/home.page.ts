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

  config: SwiperOptions = {
    slidesPerView: 1.2,
    navigation: true,
    pagination: { clickable: true },
  };

  constructor() { }

  ngOnInit() {
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
