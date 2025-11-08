import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  imports: [],
  templateUrl: './home-card.html',
  styleUrl: './home-card.css'
})
export class HomeCard {
  @Input() src: string = '';
  @Input() txt: string = '';
  @Input() width: number = 250;
  @Input() height: number = 500;
  @Input() title: string =''

  ngOnInit() {
    this.updateDimensions();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateDimensions();
  }

  private updateDimensions() {
    if (window.innerWidth <= 650 && this.height=== 500 && this.width ===250) {
      this.width = 150;
      this.height = 300;
    } else {
      this.width = this.width;
      this.height = this.height;
    }
  }
}
