import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/category.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  categories: any;
  img: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.fetchCategoris();
  }
  formProduct = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(null),
    description: new FormControl(null),
    quantity: new FormControl(null),
    category: new FormControl(null),
  });
  fetchCategoris() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  onFile(e: any) {
    this.img = e.target.files[0];
  }
  OnSubmit() {
    this.productService
      .createProduct({ ...this.formProduct.value, photo: this.img })
      .subscribe(async (data) => {
        await Swal.fire({
          icon: 'success',
          title: 'Thêm sản Phẩm thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/admin/product');
      });
  }
}
