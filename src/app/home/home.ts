import { Component, ElementRef, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { HomeCard } from "../shared/home-card/home-card";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HomeCard, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  selectedIndex = 1;
  isAnimating = false;
  isRotating = false;
  @ViewChild('rightSide') rightSide!: ElementRef;
  private autoRotateInterval: any;

  carousel = [
    {
      index: 0,
      image: "contact-us",
      text: "Contact us now, and book your next trip",
      title: "Plan Your Journey",
      description: "Our travel experts are ready to help you create the perfect itinerary."
    },
    {
      index: 1,
      image: "destinations",
      text: "Your next destination",
      title: "Discover Amazing Places",
      description: "Explore our curated list of breathtaking destinations around the world."
    },
    {
      index: 2,
      image: "blog",
      text: "Check out our latest news, and our customers reviews!",
      title: "Travel Insights",
      description: "Read stories, tips, and reviews from fellow travelers."
    }
  ];

  displayedCarousel = [...this.carousel];
  currentCard: any = this.carousel[1];

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animateContent();
    this.startAutoRotation();
  }

  startAutoRotation(){
    this.autoRotateInterval = setInterval(()=>{
      this.automaticAnimation();
    }, 6000);
  }

  stopAutoRotation() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  restartAutoRotation() {
    this.stopAutoRotation();
    this.startAutoRotation();
  }

  automaticAnimation() {
    const nextIndex = (this.selectedIndex + 1) % this.carousel.length;
    this.selectCard(nextIndex, true);
  }

  selectCard(clickedIndex: number, isAutomatic: boolean = false) {
    if (clickedIndex === this.selectedIndex || this.isRotating) return;
    
    if (!isAutomatic) {
      this.stopAutoRotation();
    }
    
    this.isRotating = true;
    
    const clickedCard = this.carousel.find(card => card.index === clickedIndex);
    if (clickedCard) {
      this.currentCard = clickedCard;
    }
    this.animateContent();
    
    const currentMiddleIndex = this.displayedCarousel.findIndex(card => card.index === this.selectedIndex);
    const clickedCardPos = this.displayedCarousel.findIndex(card => card.index === clickedIndex);
    const rotation = clickedCardPos - currentMiddleIndex;
    
    this.rotateCarousel(rotation);
    
    this.selectedIndex = clickedIndex;
    
    setTimeout(() => {
      this.isRotating = false;
    }, 600);
  }

  rotateCarousel(rotation: number) {
    if (rotation === 0) return;
    
    const newDisplay = [...this.displayedCarousel];
    
    if (rotation > 0) {
      for (let i = 0; i < rotation; i++) {
        const item = newDisplay.shift();
        if (item) newDisplay.push(item);
      }
    } else {
      for (let i = 0; i < Math.abs(rotation); i++) {
        const item = newDisplay.pop();
        if (item) newDisplay.unshift(item);
      }
    }
    
    this.displayedCarousel = newDisplay;
    this.cdRef.detectChanges();
  }

  animateContent() {
    this.isAnimating = false;
    this.cdRef.detectChanges();
    
    setTimeout(() => {
      this.isAnimating = true;
      this.cdRef.detectChanges();
    }, 5);
  }

  ngAfterViewInit() {
    this.initializeCarousel();
  }

  initializeCarousel() {
    this.carousel.forEach((card, index) => {
      card.index = index;
    });
    this.displayedCarousel = [...this.carousel];
    this.selectedIndex = 1;
    this.currentCard = this.carousel[1];
  }

  Goto(link:string){
    this.router.navigate([`/${link}`])
  }

  onUserInteractionFinished() {
    this.restartAutoRotation();
  }

  ngOnDestroy() {
    this.stopAutoRotation();
  }
}