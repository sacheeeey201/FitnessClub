import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  [x: string]: Object;
  product: Observable<Product[]>;

  constructor(private productService: ProductService,private cartService: CartService,
    private router: Router) {}

  ngOnInit() {
    let member=sessionStorage.getItem('currentMember');
    if(member==null)
    {
      alert("Please Login First")
      this.router.navigate(['loginm'])
    }
    else{
      this.router.navigate(['viewp'])
    }
    this.reloadData();
  }

  reloadData() {
    this.product = this.productService.getProductList();
    console.log(this.product);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

 addToCart(id: number){
    this.router.navigate(['viewc', id]);
  }

  save(id: number) {
    
    this.cartService.addToCart(id)
      .subscribe(data => console.log(data), error => console.log(error));
      this.router.navigate(['viewc']);
      
    //this.cart = new Cart();
    //this.cartList();
  }
  back(){
    this.router.navigate(['memberpg'])
  }
}
