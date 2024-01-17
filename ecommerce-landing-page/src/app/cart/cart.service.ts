// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<{product: Product, quantity: number}[]>([
    {
      product: {
        id: 1,
        name: 'XSound Portable Bluetooth Speaker',
        price: 45.99,
        thumbnail: 'assets/images/xsound-speaker.jpg'
      },
      quantity: 2
    },
    {
      product: {
        id: 2,
        name: 'EagleView Drone with HD Camera',
        price: 379.00,
        thumbnail: 'assets/images/eagleview-drone.jpg'
      },
      quantity: 1
    }
  ]);
  cartItems$ = this.cartItemsSubject.asObservable();
  addToCart(product: Product) {
    const currentItems = this.cartItemsSubject.getValue();
    const productIndex = currentItems.findIndex(item => item.product.id === product.id);

    if (productIndex !== -1) {
      // Product exists in the cart, update the quantity
      currentItems[productIndex].quantity += 1;
    } else {
      // Product does not exist in the cart, add it with quantity 1
      currentItems.push({ product: product, quantity: 1 });
    }

    // Emit the updated cart items
    this.cartItemsSubject.next(currentItems);
  }

  increaseQuantity(product: Product) {
    const currentItems = this.cartItemsSubject.getValue();
    const productIndex = currentItems.findIndex(item => item.product.id === product.id);

    if (productIndex !== -1) {
      currentItems[productIndex].quantity += 1;
    }

    this.cartItemsSubject.next(currentItems);
  }

  // Method to decrease quantity
  decreaseQuantity(product: Product) {
    const currentItems = this.cartItemsSubject.getValue();
    const productIndex = currentItems.findIndex(item => item.product.id === product.id);

    if (productIndex !== -1 && currentItems[productIndex].quantity > 1) {
      currentItems[productIndex].quantity -= 1;
    } else if (productIndex !== -1 && currentItems[productIndex].quantity === 1) {
      // Remove the item from the cart if the quantity is 1
      currentItems.splice(productIndex, 1);
    }

    this.cartItemsSubject.next(currentItems);
  }

  getTotalCost(): number {
    const currentItems = this.cartItemsSubject.getValue();
    return currentItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }


}
