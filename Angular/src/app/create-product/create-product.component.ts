import { ProductService } from '../product.service';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
 
  productReg: FormGroup;
  product: Product = new Product();
  submitted = false;
  pr: string;

  constructor(private productService: ProductService,
    private router: Router,private formBuilder: FormBuilder) { }

    


  ngOnInit() {
    let admin=sessionStorage.getItem('adminsession');
    if(admin==null)
    {
      alert("Please Login First")
      this.router.navigate(['logina'])
    }
    else{
      this.router.navigate(['addp'])
    }
    this.router.navigate(['addp'])

    this.productReg = this.formBuilder.group({ 
      productname: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      m_date: ['', Validators.required],
      e_date: ['', Validators.required]
   
    });
    }

    get f(){
      return this.productReg.controls;
    }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
   
    this.productService.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
      this.pr=JSON.stringify(this.product);
    this.product = new Product();
    alert("Product Added Successfully!");
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  back() {
    this.router.navigate(['adminpg']);
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}