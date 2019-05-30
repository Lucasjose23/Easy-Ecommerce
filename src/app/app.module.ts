import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ContatoPage } from '../pages/contato/contato';
import { LoginPage } from '../pages/login/login';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { CompraPage } from '../pages/compra/compra';
import { CategoriasProvider } from '../providers/categorias/categorias';



import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { PageAdminHomePage } from '../pages/page-admin-home/page-admin-home';
import { PageAdminLoginPage } from '../pages/page-admin-login/page-admin-login';
import { PageAdminLoginPageModule } from '../pages/page-admin-login/page-admin-login.module';
import { PageAdmAddpagamentoPage } from '../pages/page-adm-addpagamento/page-adm-addpagamento';
import { PageAdmAddtransportePage } from '../pages/page-adm-addtransporte/page-adm-addtransporte';
import { PageAdmCustomizarPage } from '../pages/page-adm-customizar/page-adm-customizar';
import { PageAdmAddprodPage } from '../pages/page-adm-addprod/page-adm-addprod';
import { PageModalModalPageProdPage } from '../pages/page-modal-modal-page-prod/page-modal-modal-page-prod';


export const firebaseConfig = {
  
  apiKey: "AIzaSyDrk7JWU-Rzh3jW5jvvu4bPD1TGGjkaEdE",
  authDomain: "oldgames-b4269.firebaseapp.com",
  databaseURL: "https://oldgames-b4269.firebaseio.com",
  projectId: "oldgames-b4269",
  storageBucket: "oldgames-b4269.appspot.com",
  messagingSenderId: "838056127894"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    ContatoPage,
    LoginPage,
    CarrinhoPage,
    DetalhesPage,
    CompraPage,
    PageAdminHomePage,
    PageAdminLoginPage,
    PageAdmAddpagamentoPage,
    PageAdmAddtransportePage,
    PageAdmCustomizarPage,
    PageAdmAddprodPage,
    PageModalModalPageProdPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    ContatoPage,
    LoginPage,
    CarrinhoPage,
    DetalhesPage,
    CompraPage,
    PageAdminHomePage,
    PageAdminLoginPage,
    PageAdmAddpagamentoPage,
    PageAdmAddtransportePage,
    PageAdmCustomizarPage,
    PageAdmAddprodPage,
    PageModalModalPageProdPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriasProvider,
    UsuariosProvider
  ]
})
export class AppModule {}
