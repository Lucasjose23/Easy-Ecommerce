import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  usuario={nome:'',cpf:'',email:'',telefone:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbUsuario: UsuariosProvider,public alertCtrl: AlertController,public fb:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  salvar(){
    this.fb.auth.createUserWithEmailAndPassword(this.usuario.email,this.usuario.password);
    try {
      this.dbUsuario.salvar(this.usuario);
      this.navCtrl.setRoot(HomePage);
      this.showAlert(1);
     
    } catch (error) {
      this.showAlert(2);
      
    }
    
  }

  showAlert(p) {
      if(p==1){
          const alert = this.alertCtrl.create({
            title: 'Ola amigo!!',
            subTitle: 'Cadastro realizado com sucesso!',
            buttons: ['OK']
          });
          alert.present();
      }
      else{
        const alert = this.alertCtrl.create({
          title: 'Ola amigo!!',
          subTitle: 'Cadastro com erro!!',
          buttons: ['OK']
        });
        alert.present();

      }
  }
  

}
