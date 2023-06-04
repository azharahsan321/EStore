import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  public nums: any = [1, 1, 1, 1, 1, 1, 1, 1];
  public products: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.fetchAllProducts().subscribe(res => {
      this.products = res.data;
    });
  }
}

