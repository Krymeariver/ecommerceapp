import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart/cart.service';
import {CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'XSound Portable Bluetooth Speaker', price: 45.99, thumbnail: 'assets/images/xsound-speaker.jpg' },
    { id: 2, name: 'EagleView Drone with HD Camera', price: 379.00, thumbnail: 'assets/images/eagleview-drone.jpg' },
    { id: 3, name: 'SmartFit Activity Tracker', price: 29.95, thumbnail: 'assets/images/smartfit-tracker.jpg' },
    { id: 4, name: 'Nova Wireless Earbuds', price: 59.99, thumbnail: 'assets/images/nova-earbuds.jpg' },
    { id: 5, name: 'Galactic 4K LED Smart TV 55"', price: 499.00, thumbnail: 'assets/images/galactic-tv.jpg'} ,
    { id: 6, name: 'XSound Portable Bluetooth Speaker', price: 45.99, thumbnail: 'assets/images/xsound-speaker.jpg' },
    { id: 7, name: 'EagleView Drone with HD Camera', price: 379.00, thumbnail: 'assets/images/eagleview-drone.jpg' },
    { id: 8, name: 'SmartFit Activity Tracker', price: 29.95, thumbnail: 'assets/images/smartfit-tracker.jpg' },
    { id: 9, name: 'Nova Wireless Earbuds', price: 59.99, thumbnail: 'assets/images/nova-earbuds.jpg' },
    { id: 10, name: 'Galactic 4K LED Smart TV 55"', price: 499.00, thumbnail: 'assets/images/galactic-tv.jpg' },
    { id: 11, name: 'XSound Portable Bluetooth Speaker', price: 45.99, thumbnail: 'assets/images/xsound-speaker.jpg' },
    { id: 12, name: 'EagleView Drone with HD Camera', price: 379.00, thumbnail: 'assets/images/eagleview-drone.jpg' },
    { id: 13, name: 'SmartFit Activity Tracker', price: 29.95, thumbnail: 'assets/images/smartfit-tracker.jpg' },
    { id: 14, name: 'Nova Wireless Earbuds', price: 59.99, thumbnail: 'assets/images/nova-earbuds.jpg' },
    { id: 15, name: 'Galactic 4K LED Smart TV 55"', price: 499.00, thumbnail: 'assets/images/galactic-tv.jpg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
