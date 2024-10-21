import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';  // Variable para almacenar el texto de búsqueda

  @Output() search = new EventEmitter<string>();  // Emite la bsqueda al componente padre

  // Metodo para manejar la búsqueda
  onSearch() {
    if (this.query.trim()) {
      this.search.emit(this.query);
      this.query = '';  // Limpia el campo de busqueda despues de emitir el evento
    }
  }
}
