import { Component, Sanitizer } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CompraPage } from '../compra/compra';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

  mostrar(tipo){
    const alert = this.alertCtrl.create({
      title: 'Ola amigo!!',
      subTitle: 'Cadastro realizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  comprar(){
    this.navCtrl.push(CompraPage);
  }

}
