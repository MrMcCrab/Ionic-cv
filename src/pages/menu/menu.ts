//Juuso Heinonen 1600400

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';


export interface pageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage({name: 'menu-page'})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage="tabs-page";

  @ViewChild(Nav) nav: Nav;

  //list of pages on side menu
  pages: pageInterface[] = [
    {title: 'About me', pageName: 'tabs-page', tabComponent: 'HomePage', index: 0, icon: 'home'},
    {title: 'Contact', pageName: 'tabs-page', tabComponent: 'AboutPage', index: 1, icon: 'contact'},
    {title: 'CV', pageName: 'cv-page', tabComponent: 'CvPage', index: 2, icon: 'paper'},
    {title: 'Extra Curriculum', pageName: 'extra-page', tabComponent: 'ExtraCurriculumPage', index: 3, icon: 'person'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: pageInterface){
    let params ={};

    if(page.index){
      params = {tabIndex: page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: pageInterface){
    let childNav = this.nav.getActiveChildNav();

    if(childNav){
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
