import { product } from './../../../../my-test/src/app/home/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
})
export class DetailPageComponent implements OnInit {
  productDetails: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchById();
  }
  fetchById() {
    this.route.params.subscribe((params) => {
      this.productService.getDetail(params.id).subscribe((product) => {
        this.productDetails = product;
      });
    });
  }
}
