import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  product: Observable<Cart[]>;
 
cart: any;

  constructor(private cartService: CartService,
    private router: Router) {}

  ngOnInit() {
    this.router.navigate(['viewc'])

    this.reloadData();
  }

  reloadData() {
    this.router.navigate(['viewc']);
    this.cart = this.cartService.getCartList();
    console.log(this.cart);
  }

  deleteCart(id: number) {
    this.cartService.deleteCart(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
        this.router.navigate(['viewc']);
  }

 addToCart(id: number){
    this.router.navigate(['addtc', id]);
  }

  order()
  {
  
    this.router.navigate(['order'])
  }

  back(){
    this.router.navigate(['viewp'])
  }

}
