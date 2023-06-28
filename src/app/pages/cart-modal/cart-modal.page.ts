import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { Product } from "../../services/cart.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-cart-modal",
  templateUrl: "./cart-modal.page.html",
  styleUrls: ["./cart-modal.page.scss"],
})
export class CartModalPage implements OnInit {
  cart: Product[] = [];

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product: Product): void {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product: Product): void {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: Product): void {
    this.cartService.removeProduct(product);
  }

  getTotal(): number {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close(): void {
    this.modalCtrl.dismiss();
  }

  trackByFn(index: number, product: Product): number {
    return product.id;
  }

  checkout() {}
}
