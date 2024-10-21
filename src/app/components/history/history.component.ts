import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  @Input() history: string[] = [];
  @Output() repeatSearch = new EventEmitter<string>();

  // Mtodo para manejar la selección de una búsqueda anterior
  onSearch(query: string) {
    this.repeatSearch.emit(query);
  }
}
