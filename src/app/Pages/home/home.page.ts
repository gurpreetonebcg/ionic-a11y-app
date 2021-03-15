import { Component } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertController, private actionSheetController: ActionSheetController, private loader: LoadingController, private toast: ToastController, private navCtrl: NavController, private modalController: ModalController) {}

  async popActionSheet() {  
    const actionSheet = await this.actionSheetController.create({   //Action sheet
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          const alert = this.alertCtrl.create({     //Alert for delete
            header: 'Delete',    
            message: 'Sure want tot delete?',
            buttons: [
              {
                text: 'Delete',
                handler: () => {
                  var loader = this.loader.create({     // Loader
                    message: 'Please wait',
                    duration: 2000
                  });
                  loader.then(data => data.present());                  
                }
              }, 
              {
                text: 'Cancel',
                role: 'close',
                handler: () => {
                  console.log('Not deleted');                  
                }
              }
            ]
          });

          alert.then(data => data.present());
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async popToast(){   //Toast
    var toast = this.toast.create({
      message: 'Deleted',
      duration: 2000
    });
    toast.then(data => data.present());
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',      
    });
    return await modal.present();
  }  

  gotToList(){    //Navigate to List page
    this.navCtrl.navigateForward('list-page');
  }

  goToSliderPage(){  //Navigate to Slider page
    this.navCtrl.navigateForward('slider-page');
  }
  goToSignaturePadPage(){  //Navigate to Signature page
    this.navCtrl.navigateForward('signature-pad');
  }
}
