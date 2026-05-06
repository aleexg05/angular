import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComarcaFires } from '../view/layout/elements/comarca-fires/comarca-fires';
import { FiresPreferides } from '../app/fires-preferides/fires-preferides';
import { Header } from '../view/layout/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, RouterOutlet, ComarcaFires, FiresPreferides, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listaPreferidas: any[] = [];
  mostrarDreta: boolean = true;
  vistaActual: 'home' | 'comarca' | 'preferides' = 'home'; 
  firaSeleccionada: any = null;
  firaSeleccionadaSidebar: any = null;

  actualizarPreferidas(fira: any) {
    const existe = this.listaPreferidas.some(p => p.activityName === fira.activityName);
    if (!existe) {
      this.listaPreferidas = [...this.listaPreferidas, fira];
    }
  }

  actualizarVisibilidad(firaSeleccionada: any) {
    this.mostrarDreta = firaSeleccionada === null;
    this.firaSeleccionada = firaSeleccionada;
    if (this.vistaActual === 'home' && firaSeleccionada !== null) {
      this.firaSeleccionadaSidebar = firaSeleccionada;
    } else if (firaSeleccionada === null) {
      this.firaSeleccionadaSidebar = null;
    }
  }


  actualizarFiraSidebar(fira: any) {
    console.log('actualizarFiraSidebar called with:', fira);
    this.firaSeleccionadaSidebar = fira;
    if (fira !== null) {
      this.mostrarDreta = false; 
    } else {
      this.mostrarDreta = true; 
    }
    console.log('firaSeleccionadaSidebar is now:', this.firaSeleccionadaSidebar);
  }


  desmarcar(fira: any) {
    this.listaPreferidas = this.listaPreferidas.filter(p => p.activityName !== fira.activityName);
  }

  cambiarVista(vista: 'home' | 'comarca' | 'preferides') {
    this.vistaActual = vista;
    this.firaSeleccionada = null;
    this.firaSeleccionadaSidebar = null;
    this.mostrarDreta = true;
  }
}