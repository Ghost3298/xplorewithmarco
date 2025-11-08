import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css'
})
export class ContactCard {
  @Input() imgSrc:string = '';
  @Input() name: string='';
  @Input() role: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
}
