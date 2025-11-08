import { Component } from '@angular/core';
import { News } from "../shared/news/news";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [News, CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  public news=[
    {
      imgSrc:"news1.jpg",
      title:"Discount up to 15%",
      text: "get discount now!"
    },
    {
      imgSrc:"news1.jpg",
      title:"Discount up to 15%",
      text: "get discount now!"
    },
    {
      imgSrc:"news1.jpg",
      title:"Discount up to 15%",
      text: "get discount now!"
    },
    {
      imgSrc:"news1.jpg",
      title:"Discount up to 15%",
      text: "get discount now!"
    },
    {
      imgSrc:"news1.jpg",
      title:"Discount up to 15%",
      text: "get discount now!"
    },
    {
      imgSrc:"news1.jpg",
      title:"Discount up to 15%",
      text: "get discount now!"
    },
  ]
}
