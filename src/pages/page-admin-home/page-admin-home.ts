import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageAdmCustomizarPage } from '../page-adm-customizar/page-adm-customizar';
import { PageAdmAddprodPage } from '../page-adm-addprod/page-adm-addprod';
import { PageAdmAddtransportePage } from '../page-adm-addtransporte/page-adm-addtransporte';
import { PageAdmAddpagamentoPage } from '../page-adm-addpagamento/page-adm-addpagamento';

/**
 * Generated class for the PageAdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-admin-home',
  templateUrl: 'page-admin-home.html',
})
export class PageAdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAdminHomePage');
  }
  openPage1(){
    this.navCtrl.push(PageAdmCustomizarPage);
  }
  openPage2(){
    this.navCtrl.push(PageAdmAddprodPage);
  }
  openPage3(){
    this.navCtrl.push(PageAdmAddtransportePage);
  }
  openPage4(){
    this.navCtrl.push(PageAdmAddpagamentoPage);
  }

}
