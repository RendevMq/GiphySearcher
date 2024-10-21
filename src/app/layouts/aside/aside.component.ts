import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  @Input() isOpen = false;
  @Input() historyData: string[] = []; // Nuevo Input para recibir el historial
  @Output() menuSelect = new EventEmitter<void>();
  @Output() searchFromHistory = new EventEmitter<string>(); // Nuevo Output para las búsquedas

  onHistorySearch(query: string) {
    this.searchFromHistory.emit(query);
    this.menuSelect.emit(); // Esto cierra el aside en movil despues de seleccionar
  }
}