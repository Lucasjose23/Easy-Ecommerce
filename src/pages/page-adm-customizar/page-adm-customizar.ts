import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PageAdmCustomizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-adm-customizar',
  templateUrl: 'page-adm-customizar.html',
})
export class PageAdmCustomizarPage {
  custom = { logo: '', nome: '',descri:'',cor:"" };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageAdmCustomizarPage');
  }

 

}
