import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {LoginButtonComponent} from "./login-button/login-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CartComponent, ProductListComponent, LoginButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-landing-page';
}
