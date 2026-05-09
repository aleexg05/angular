import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fires-preferides',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fires-preferides.html',
  styleUrl: './fires-preferides.css'
})
export class FiresPreferides {
  @Input() preferides: any[] = [];
  
  @Output() onDesmarcar = new EventEmitter<any>();
  @Output() onVeureDetall = new EventEmitter<any>();
  @Output() firaSeleccionadaChange = new EventEmitter<any>();

  firaSeleccionada: any = null;

  constructor() {
    this.restoreData();
  }

  desmarcar(fira: any) {
    this.onDesmarcar.emit(fira);
    if (this.firaSeleccionada?.activityName === fira.activityName) {
      this.firaSeleccionada = null;
      this.firaSeleccionadaChange.emit(null);
    }
    this.saveData;
    this.saveData;
  }

  veureInfo(fira: any) {
    this.firaSeleccionada = fira;
    this.firaSeleccionadaChange.emit(fira); 
    this.onVeureDetall.emit(fira); 
  }

  tornarAlLlistat() {
    this.firaSeleccionada = null;
    this.firaSeleccionadaChange.emit(null); 
    this.onVeureDetall.emit(null);
  }
 

 
    saveData(): void {
    localStorage.setItem("Fires_preferides", JSON.stringify(this.preferides));
  
  }
   restoreData(): void {
    let firesPreferides = localStorage.getItem("Fires_preferides");

    if(firesPreferides) {
      this.preferides = JSON.parse(firesPreferides) ;
     
    }

  }
 
}
