import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Observable, from } from "rxjs";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  product: Observable<Product[]>;

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    let admin=sessionStorage.getItem('adminsession');
    if(admin==null)
    {
      alert("Please Login First")
      this.router.navigate(['logina'])
    }
    else{
      this.router.navigate(['products'])
    }
    this.reloadData();
  }

  reloadData() {
    this.product = this.productService.getProductList();
  }

  back() {
    this.router.navigate(['adminpg'])
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

  updateProduct(id: number){
    this.router.navigate(['updatep', id]);
  }
  
  productDetails(id: number){
    this.router.navigate(['detailsp', id]);
  }
}
