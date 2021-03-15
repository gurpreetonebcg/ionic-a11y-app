import { Component, OnInit,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad';
@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.page.html',
  styleUrls: ['./signature-pad.page.scss'],
})
export class SignaturePadPage implements OnInit {
  isdraw = false;
  @ViewChild(SignaturePad, { static: true }) signaturePad: SignaturePad;

  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': (window.innerWidth-25),
    'canvasHeight': 350,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.isdraw = true;
    console.log(this.signaturePad.toDataURL());
  }
  clearPad()
  {
    this.signaturePad.clear();
    this.isdraw=false;
  }
  savePad()
  {
    this.navCtrl.navigateForward('home');
  }
}
