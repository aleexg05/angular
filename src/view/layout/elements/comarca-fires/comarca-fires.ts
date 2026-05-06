import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CATALAN_FAIRS } from '../../../../app/model/fairs';
import { FiresPreferides } from '../../../../app/fires-preferides/fires-preferides';

@Component({
  selector: 'app-comarca-fires',
  standalone: true,
  imports: [CommonModule, FormsModule, FiresPreferides],
  templateUrl: './comarca-fires.html',
  styleUrl: './comarca-fires.css',
})
export class ComarcaFires {
  @Output() onMarcar = new EventEmitter<any>();
  @Output() onEstadoVista = new EventEmitter<any>();

  comarques: string[] = this.obtenirComarques();
  comarcaSeleccionada: string | null = null;
  firesFiltrades: any[] = [];
  firaSeleccionada: any = null;

  obtenirComarques(): string[] {
    const arrayComarques: string[] = [];
    CATALAN_FAIRS.forEach(fira => {
      if (fira.regionName && !arrayComarques.includes(fira.regionName)) {
        arrayComarques.push(fira.regionName);
      }
    });
    return arrayComarques.sort();
  }

  alCanviarComarca() {
    this.firaSeleccionada = null; 
    this.onEstadoVista.emit(null);
    if (this.comarcaSeleccionada) {
      this.firesFiltrades = CATALAN_FAIRS.filter(f => f.regionName === this.comarcaSeleccionada);
    } else {
      this.firesFiltrades = [];
    }
  }

  mesInformacio(fira: any) {
    this.firaSeleccionada = fira;
    this.onEstadoVista.emit(fira);
  }

  tornarAlLlistat() {
    this.firaSeleccionada = null;
    this.onEstadoVista.emit(null);
  }

  marcarPreferida(fira: any) {
    this.onMarcar.emit(fira);
  }
}