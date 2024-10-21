import { Component, Input } from '@angular/core';
import { Gif } from '../../models/gif.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';  // Servicio DomSanitizer

@Component({
  selector: 'app-gif-display',
  templateUrl: './gif-display.component.html',
  styleUrls: ['./gif-display.component.css']
})
export class GifDisplayComponent {
  @Input() gifs: Gif[] = [];

  constructor(private sanitizer: DomSanitizer) {}  // Inyecta el servicio DomSanitizer

  // Método para sanitizar la URL del iframe
  getSanitizedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);  
  }
  
}

/*
import { Component, Input } from '@angular/core';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-gif-display',
  templateUrl: './gif-display.component.html',
  styleUrls: ['./gif-display.component.css']
})
export class GifDisplayComponent {
  @Input() gifs: Gif[] = []; 
}*/
