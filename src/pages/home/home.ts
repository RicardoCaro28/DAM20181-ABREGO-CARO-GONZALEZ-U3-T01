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

  scanear() {
    this.barcodescanner.scan().then(data => {
      this.escaneo = data.text;
      this.cadena = data.text;

      this.x = this.cadena.split(" ");
      this.nombre = this.x[0];
      this.apellido = this.x[1];
      this.numero = this.x[2];

      let contact: Contact = this.contacts.create();

      contact.name = new ContactName(null, this.apellido, this.nombre);
      contact.phoneNumbers = [new ContactField('mobile', this.numero)];
      contact.save().then(
        () => {
          console.log('Contact saved!', contact);
          let toast = this.toast.create({
            message: 'Contacto añadido correctamente',
            duration: 3000
          });
          toast.present();

        },
        (error: any) => {
          console.error('Error saving contact.', error);
          let toast = this.toast.create({
            message: 'No se pudo agregar contacto',
            duration: 3000
          });
          toast.present();

        }
      );

    })

  }
 


}
