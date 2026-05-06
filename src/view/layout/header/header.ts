import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() onVistaCambiada = new EventEmitter<'home' | 'comarca' | 'preferides'>();

  anarAHome() {
    this.onVistaCambiada.emit('home');
  }

  anarAComarques() {
    this.onVistaCambiada.emit('comarca');
  }

  anarAPreferides() {
    this.onVistaCambiada.emit('preferides');
  }
}