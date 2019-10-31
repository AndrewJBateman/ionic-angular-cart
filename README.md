# Ionic Angular Cart

Ionic 5 app to show a shopping cart where the user can select items and see them added to a cart. Items can also be removed and the total price and product quantities will be updated. This is another great tutorial from [Simon Grimm of Devdactic, Youtube video 'How to Build a Shopping Cart with Ionic 4'](https://www.youtube.com/watch?v=SYz-tH3XOF8&t=766s).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* modal used to show shopping cart contents: product quantities can be increased or decreased and total price will adjusted using a simple reduce function.

* animate.css used to provide some fun visual effects when items are added to the cart and when the cart modal is activated and dismissed. There are options to control delays, speed of animation etc.

## Screenshots

![screenshot](./img/main-screen.png)
![screenshot](./img/cart.png)

## Technologies

* [Ionic v5.0.0](https://ionicframework.com/)
* [Ionic/angular v4.7.1](https://ionicframework.com/)
* [Angular v8.1.2](https://angular.io/)
* [Angular rxjs v6.5.1](https://angular.io/guide/rx-library) reactive programming.
* [RxJS Behavior subject](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject) to represent the event stream of product cart updates.
* [animate.css v3.7.2](https://github.com/daneden/animate.css/) a library of CSS animations.

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'
* To start the server on a mobile using Ionic devapp and connected via wifi, type: 'ionic serve --devapp'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## Code Examples

* Cart service: function to add a product to the shopping cart.

```typescript
addProduct(product) {
  let added = false;
  for (const p of this.cart) {
    if (p.id === product.id) {
      p.amount += 1;
      added = true;
      break;
    }
  }
  if (!added) {
    this.cart.push(product);
  }
  this.cartItemCount.next(this.cartItemCount.value + 1);
}
```

## Features

* Animate.css to animate items.

## Status & To-do list

* Status: Working.

* To-do: add a backend product list. Add to functionality, including a checkout and payment function.

## Inspiration

* [Simon Grimm of Devdactic, Youtube video 'How to Build a Shopping Cart with Ionic 4'](https://www.youtube.com/watch?v=SYz-tH3XOF8&t=766s).

* [Written version of tutorial from Simon Grimm of Devdactic](https://devdactic.com/shopping-cart-ionic-4/).

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
