import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  submitted: boolean;
  cart: any;
  memberService: any;


  constructor(private cartService: CartService,
  private router: Router ) { }

  ngOnInit(): void {
  }

  newCart(): void {
    this.submitted = false;
    this.cart = new Cart();
  }

  save() {
    this.cartService.addToCart(this.cart)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cart = new Cart();
    this.cartList();
  }
  

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  cartList() {
    this.router.navigate(['viewc']);
  }
}