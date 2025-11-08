import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { SocialMedia } from "./shared/social-media/social-media";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, SocialMedia],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('explorewithmarco');
}
