import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fav=FavoritesPage;
  favoritos=[];
  casas=[
    {
      titulo: "Residencia Puerta de Hierro",
      precio: "$" +"14,490,000.00 ",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2018/10/10369743/d-1397384.jpg"
    },
    {
      titulo: "CASA cerca BARRIO SANTA TERE",
      precio: "$" + "1,600,000.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2018/12/10383274/d-1405159.jpg"
    },
    {
      titulo:"PARQUE Santa Cruz del Valle excelente coto 3 recamaras",
      precio: "$" + "990,000.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2019/01/10385215/d-1406386.jpg"
    },
    {
      titulo: "VENTA CASA LOMAS DE SAN AGUSTIN",
      precio: "$" + "750,000.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2019/01/10385955/d-1406878.jpg"
    },
    {
      titulo: "VALLARTA San Jorge, REMODELADA AL 100 %",
      precio: "$" + "4,800,000.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2018/12/10383646/d-1406720.jpg"
    },
    {
      titulo: "bien ubicado últimos dos departamentos cerca minerva",
      precio: "$" + "4,063,620.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2017/07/10255824/d-1276395.jpg"
    },
    {
      titulo: "DEPARTAMENTO segundo nivel Valle de los Molinos Zapopan, 2 r",
      precio: "$" + "285,000.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2018/12/10380702/d-1402984.jpg"
    },
    {
      titulo: "Rancho Nuevo, por calle Legalidad",
      precio: "$" + "1,100,000.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2018/04/10326104/d-1404050.jpg"
    },
    {
      titulo: "Alta rentabilidad nuevo Chapultepec",
      precio: "$" + "2,768,130.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2018/04/10327053/d-1356428.jpg"
    },
    {
      titulo: "Casa en Venta",
      precio: "$" + "390,000.00",
      foto: "http://aviso.static.informador.com.mx/images_avisos/bienes_raices/2019/01/10385924/d-1406822.jpeg"
    }
  ];
  constructor(public navCtrl: NavController) {

  }
  favorite(c: any){
    this.favoritos.push(c);
    console.log(this.favoritos.length);
  }
  goFavs(){
    this.navCtrl.push(this.fav,{favs:this.favoritos});
  }
}
