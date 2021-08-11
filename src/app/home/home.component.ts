import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../home/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listProducts: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.listProducts = products;
      console.log(this.listProducts);
    });
  }
  Remove(id: string) {
    this.productService.removeProduct(id).subscribe((products) => {
      this.listProducts = this.listProducts.filter(
        (product: Product) => product.id !== id
      );
    });
  }
}
