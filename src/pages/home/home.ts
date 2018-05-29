import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  escaneo = null;
  cadena: string = "";
  nombre: string = "";
  apellido: string = "";
  numero: string = "";
  x: any;


  constructor(public navCtrl: NavController, private barcodescanner: BarcodeScanner,
    private contacts: Contacts, public toast: ToastController) {

  }

 


}
