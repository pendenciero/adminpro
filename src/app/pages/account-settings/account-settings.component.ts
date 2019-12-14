import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public ajustesService: SettingsService) { }

  ngOnInit() {
      this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    console.log(tema);

    this.applicarCheck(link);

    this.ajustesService.aplicarTema(tema);


  }

  applicarCheck(link: any) {

      const selectores: any = document.getElementsByClassName('selector');

      for ( const ref of selectores) {
        ref.classList.remove('working'); // elimina las clases working
      }

      link.classList.add('working');
  }

  colocarCheck() {

    const tema = this.ajustesService.ajustes.tema;

    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores) {
      if ( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
