import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PageModalModalPageProdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-modal-modal-page-prod',
  templateUrl: 'page-modal-modal-page-prod.html',
})
export class PageModalModalPageProdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageModalModalPageProdPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
