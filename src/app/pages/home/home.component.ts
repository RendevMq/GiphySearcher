import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAsideOpen = false;
  gifs: Gif[] = [];
  history: string[] = [];

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen;
  }

  closeAside() {
    this.isAsideOpen = false;
  }

  handleClick(event: MouseEvent) {
    if (this.isAsideOpen) {
      const asideElement = document.querySelector('app-aside');
      const navbarElement = document.querySelector('app-navbar');
      if (asideElement && navbarElement) {
        if (!asideElement.contains(event.target as Node) && 
            !navbarElement.contains(event.target as Node)) {
          this.closeAside();
        }
      }
    }
  }

  searchGifs(query: string) {
    this.giphyService.searchGifs(query).subscribe((results: Gif[]) => {
      this.gifs = results;
      this.addToHistory(query);
    });
  }

  handleHistorySearch(query: string) {
    this.searchGifs(query);
    this.closeAside(); // Cerrar el aside después de buscar en móvil
  }

  addToHistory(query: string) {
    if (!this.history.includes(query)) {
      this.history.unshift(query);
      if (this.history.length > 10) {
        this.history.pop();
      }
      localStorage.setItem('searchHistory', JSON.stringify(this.history));
      this.history = [...this.history];
    }
  }

  loadHistory() {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      this.history = JSON.parse(storedHistory);
    } else {
      this.history = ['dragon ball', 'funny cat', 'meme'];
    }
  }
}