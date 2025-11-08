import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-news',
  imports: [MatIconModule],
  templateUrl: './news.html',
  styleUrl: './news.css'
})
export class News {
  @Input() imgSrc :string = '';
  @Input() title: string = '';
  @Input() text: string ='';
  public clicked: boolean = false;
  public likes: number = 0;

  Like(){
    this.clicked = !this.clicked;
    if(this.clicked === true){
      this.likes++;
    } else {
      if(this.likes === 0)
        {
        return
        } else {
          this.likes--;
        }
    }
  }
}
