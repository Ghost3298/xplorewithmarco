import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-social-media',
  imports: [CommonModule],
  templateUrl: './social-media.html',
  styleUrl: './social-media.css'
})
export class SocialMedia {
  public links =[
    {
      icon: "whatsapp",
      alt: "Whatsapp",
      link: "https://wa.me/+96171767657"
    },
    {
      icon: "instagram",
      alt: "Instargam",
      link: "https://www.instagram.com"
    },
    {
      icon: "facebook",
      alt: "Facebook",
      link: "https://www.facebook.com"
    },
    {
      icon: "booking",
      alt: "Booking.com",
      link: "https://www.booking.com"
    },
  ]
}
