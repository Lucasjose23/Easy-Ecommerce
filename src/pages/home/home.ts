import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';
import { ContatoPage } from '../contato/contato';
import { DetalhesPage } from '../detalhes/detalhes';
import { PageAdminHomePage } from '../page-admin-home/page-admin-home';
import { PageAdminLoginPage } from '../page-admin-login/page-admin-login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openPage1(){
    this.navCtrl.push(HomePage);
  }
  openPage2(){
    this.navCtrl.push(LoginPage);
  }
  openPage3(){
    this.navCtrl.push(CadastroPage);
  }
  openPage4(){
    this.navCtrl.push(PageAdminLoginPage);
  }
  goDetalhes(){
    this.navCtrl.push(DetalhesPage);
  }




}
