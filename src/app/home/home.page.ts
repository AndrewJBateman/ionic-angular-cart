import { CartService, Product } from "./../services/cart.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { CartModalPage } from "../pages/cart-modal/cart-modal.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild("cart", { static: false, read: ElementRef }) fab: ElementRef;

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product: Product) {
    console.log(`add ${product.name} to cart`);
    this.animateCSS("jello");
    this.cartService.addProduct(product);
  }

  async openCart() {
    this.animateCSS("bounceOutLeft", true);

    const modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: "cart-modal",
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove("animated", "bounceOutLeft");
      this.animateCSS("bounceInLeft");
    });
    modal.present();
  }

  // copied from animate.css github page: https://github.com/daneden/animate.css
  animateCSS(animationName: string, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add("animated", animationName);

    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove("animated", animationName);
      }
      node.removeEventListener("animationend", handleAnimationEnd);
    }
    node.addEventListener("animationend", handleAnimationEnd);
  }
}
