import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter<void>();
  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  onToggleMenu(event: Event) {
    event.stopPropagation();
    this.toggleMenu.emit();
  }
}