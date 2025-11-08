import { Component } from '@angular/core';
import { ContactCard } from "../shared/contact-card/contact-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ContactCard, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
    public contacts=[
      {
        imgSrc:"images.png",
        name: "Eddy Lebbos",
        role:"CEO",
        email:"eddy.lebbos@hotmail.com",
        phone:"+96170351850"
      },
      {
        imgSrc:"images.png",
        name: "Joe Lebbos",
        role:"Sales Rep",
        email:"joseph.lebbos@hotmail.com",
        phone:"+96171831645"
      }
      ,
      {
        imgSrc:"images.png",
        name: "Joe Lebbos",
        role:"Sales Rep",
        email:"joseph.lebbos@hotmail.com",
        phone:"+96171831645"
      }
      ,
      {
        imgSrc:"images.png",
        name: "Joe Lebbos",
        role:"Sales Rep",
        email:"joseph.lebbos@hotmail.com",
        phone:"+96171831645"
      },
      {
        imgSrc:"images.png",
        name: "Joe Lebbos",
        role:"Sales Rep",
        email:"joseph.lebbos@hotmail.com",
        phone:"+96171831645"
      },
      {
        imgSrc:"images.png",
        name: "Joe Lebbos",
        role:"Sales Rep",
        email:"joseph.lebbos@hotmail.com",
        phone:"+96171831645"
      },
      {
        imgSrc:"images.png",
        name: "Joe Lebbos",
        role:"Sales Rep",
        email:"joseph.lebbos@hotmail.com",
        phone:"+96171831645"
      }
    ]
}
