import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import * as countryCodes from "country-codes-list";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  public countryCodesArray = Object.entries(countryCodes.all()).map(([code, country]) => ({
    code:country.countryCode,
    callingCode: country.countryCallingCode,
    name: country.countryNameEn
  }))

  public links =[
    {
      title: "Home",
      link: ""
    },
    {
      title: "Destinations",
      link:"destinations"
    },
    {
      title : "Contact Us",
      link: "contact-us"
    },
    {
      title: "Blog",
      link: "blog"
    }
  ]

  isMenuOpen = false;
  isLoginPopupOpen = false;
  loggedIn = false;
  isLogin  = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  togglePopup(){
    this.isLoginPopupOpen = !this.isLoginPopupOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleLogin(){
    this.isLogin = !this.isLogin;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
     if (!target.closest('.navbar') && this.isMenuOpen) {
      this.closeMenu();
    }

    if (this.isLoginPopupOpen && target.closest('.login-popup') && !target.closest('form')) {
      this.togglePopup();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.closeMenu();
    
    if(this.isLoginPopupOpen){
      this.isLoginPopupOpen = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 650 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  // Signup data
  signupData = {
    fullName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  };

  // UI state
  showPassword = false;
  showConfirmPassword = false;

  // ... existing methods ...

  // New methods for enhanced login/signup
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onLoginSubmit() {
    // Implement login logic
    console.log('Login submitted:', this.loginData);
    // After successful login:
    // this.loggedIn = true;
    // this.isLoginPopupOpen = false;
  }

  onSignupSubmit() {
    // Implement signup logic
    console.log('Signup submitted:', this.signupData);
    // After successful signup:
    // this.isLogin = true;
    // this.isLoginPopupOpen = false;
    // Show success message
  }

  onForgotPassword() {
    // Implement forgot password logic
    console.log('Forgot password clicked');
  }

  socialLogin(provider: string) {
    // Implement social login logic
    console.log('Social login with:', provider);
  }

  getPasswordStrengthClass(): string {
    const password = this.signupData.password;
    if (!password) return '';
    
    const strength = this.calculatePasswordStrength(password);
    if (strength < 3) return 'weak';
    if (strength < 5) return 'medium';
    return 'strong';
  }

  getPasswordStrengthText(): string {
    const password = this.signupData.password;
    if (!password) return '';
    
    const strength = this.calculatePasswordStrength(password);
    if (strength < 3) return 'Weak password';
    if (strength < 5) return 'Medium password';
    return 'Strong password';
  }

  calculatePasswordStrength(password: string): number {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  }

  passwordsMatch(): boolean {
    return this.signupData.password === this.signupData.confirmPassword;
  }

  showTerms() {
    // Implement terms display
    console.log('Show terms of service');
  }

  showPrivacy() {
    // Implement privacy policy display
    console.log('Show privacy policy');
  }
}