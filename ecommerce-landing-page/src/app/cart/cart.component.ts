// cart.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { CartService } from './cart.service'; // Update with correct path
import { Product } from '../product.model';
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true, // This enables using Angular features without NgModules
  imports: [
    CommonModule, // Import CommonModule to use *ngFor
    CurrencyPipe
  ],
})

export class CartComponent {
  // Define cartItems to match the structure provided by the CartService
  cartItems: { product: Product; quantity: number }[] = [];

  constructor(protected cartService: CartService) {
    this.cartService.cartItems$.subscribe(items => {
      // Ensure we are assigning the correct structure to cartItems
      this.cartItems = items;
    });
  }

  // Method to change quantity should be updated to handle this structure
  changeQuantity(product: Product, changeType: 'increase' | 'decrease') {
    // Call service methods to increase or decrease quantity
    // You need to implement this method in CartService
    if (changeType === 'increase') {
      this.cartService.increaseQuantity(product);
    } else {
      this.cartService.decreaseQuantity(product);
    }
  }
}
