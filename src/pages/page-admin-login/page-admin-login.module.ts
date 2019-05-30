import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageAdminLoginPage } from './page-admin-login';

@NgModule({
  declarations: [
    PageAdminLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PageAdminLoginPage),
  ],
})
export class PageAdminLoginPageModule {}
