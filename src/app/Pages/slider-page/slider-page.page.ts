import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.page.html',
  styleUrls: ['./slider-page.page.scss'],
})
export class SliderPagePage implements OnInit {
  @ViewChild('mySlider', { static: true })  slides: IonSlides;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  bucketAPILink: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: false,
    allowTouchMove: false,
    pagination: false,
    gesture: true
  };
  newList = [];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews(){
    for (let i = 0; i < 5; i++) {
      let obj = {
          'subject': 'Ionic',
          'message': 'An open source mobile UI toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web.',          
      }
      this.newList.push( obj );      
    }
  }

  swipeNext(){
    let spanCountNewPost = document.querySelector('span[id="spanCountNews"]');
    spanCountNewPost.textContent = "";
    if (this.finalSlide) {
      this.navCtrl.navigateRoot('/home');
    } else {
      this.slides.lockSwipes( false );
      this.slides.slideNext();
      this.content.scrollToTop(400);
      this.slides.lockSwipes( true );
      // this.translateService.get(['News_Post_Changed']).subscribe(lang => {
        spanCountNewPost.textContent = "News post changed";
      // });
    }
  }
  finalSlide: boolean = false;

  slideChanged() {
    let me = this;
      me.slides.isEnd().then((istrue) => {
        // console.log('me.slides.isEnd()',istrue);
        if (istrue) {
          me.finalSlide = true;
        } else {
          me.finalSlide = false;
        }
      });
  }

}
