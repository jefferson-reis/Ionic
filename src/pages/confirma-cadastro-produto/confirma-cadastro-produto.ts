import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FiltroPage } from '../filtro/filtro';


/**
 * Generated class for the ConfirmaCadastroProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirma-cadastro-produto',
  templateUrl: 'confirma-cadastro-produto.html',
})
export class ConfirmaCadastroProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaCadastroProdutoPage');
  }

  voltaFiltro() {

    this.navCtrl.push(FiltroPage)

  }

}
