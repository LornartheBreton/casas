import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfoPage} from '../info/info';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favs=[];
  info = InfoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.favs=this.navParams.get("favs");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  goInfo(c: any) {
    this.navCtrl.push(this.info, { h: c });
  }
}
