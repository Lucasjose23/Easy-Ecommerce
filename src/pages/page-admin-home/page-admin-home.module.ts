import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageAdminHomePage } from './page-admin-home';

@NgModule({
  declarations: [
    PageAdminHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PageAdminHomePage),
  ],
})
export class PageAdminHomePageModule {}
