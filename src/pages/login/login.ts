import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { ErrorPage } from '../error/error';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email: '', password: '' };
  loginForm: any;
  messageEmail = '';
  messagePassword = '';
  errorEmail = false;
  errorPassword = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fbAuth: AngularFireAuth, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]


    });

  }

  login(user) {

    let { email, password } = this.loginForm.controls;
    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Opa! Email inválido!";
      } else {
        this.messageEmail = "";
      }

      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword = "Opa! Senha inválido!";
      } else {
        this.messagePassword = "";
      }
    

    } else {
      const result = this.fbAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if (result) {
        this.navCtrl.push(HomePage);
        this.showAlert(1);
      }
    }
  }

  showAlert(p) {
    if (p == 1) {
      const alert = this.alertCtrl.create({
        title: 'Ola amigo!!',
        subTitle: 'Login realizado com sucesso!',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Ola amigo!!',
        subTitle: 'Login com erro!!',
        buttons: ['OK']
      });
      alert.present();

    }
  }

}
