import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { FiltroPage } from '../pages/filtro/filtro';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { ConfirmaCadastroProdutoPage } from '../pages/confirma-cadastro-produto/confirma-cadastro-produto';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    FiltroPage,
    CadastroPage,
    CadastroProdutoPage,
    ConfirmaCadastroProdutoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FiltroPage,
    LoginPage,
    CadastroPage,
    CadastroProdutoPage,
    ConfirmaCadastroProdutoPage

 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
