import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PageModalModalPageProdPage } from '../page-modal-modal-page-prod/page-modal-modal-page-prod';


/**
 * Generated class for the PageAdmAddprodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-adm-addprod',
  templateUrl: 'page-adm-addprod.html',
})
export class PageAdmAddprodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAdmAddprodPage');
  }
  presentModal() {
    const modal = this.modalCtrl.create(PageModalModalPageProdPage);
    modal.present();
  }

}
