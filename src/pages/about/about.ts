import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
  ) {

  }

    presentActionSheet() {
      const actionSheet = this.actionSheetCtrl.create({
        title: 'Modify your album',
        buttons: [
          {
            text: 'Destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          },{
            text: 'Archive',
            handler: () => {
              console.log('Archive clicked');
            }
          },{
            text: 'Cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }

}
