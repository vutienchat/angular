import { product } from './../../../../../../my-test/src/app/home/movie';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  id: string;
  categories: any;
  img: any;
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getid();
    this.fetchCategoris();
  }
  onFile(e: any) {
    this.img = e.target.files[0];
  }
  fetchCategoris() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  getid() {
    this.route.params.subscribe((param) => {
      this.productService
        .getDetail(param.id)
        .subscribe(({ name, price, description, quantity, category, _id }) => {
          this.id = _id;
          if (name && price && description) {
            this.formEdit.setValue({
              name,
              price,
              description,
              quantity,
              category: category._id,
            });
          }
        });
    });
  }
  formEdit = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(null),
    description: new FormControl(null),
    quantity: new FormControl(null),
    category: new FormControl(null),
  });
  onSubmit() {
    this.productService
      .editProduct(this.id, { ...this.formEdit.value, photo: this.img })
      .subscribe(async (product) => {
        await Swal.fire({
          icon: 'success',
          title: 'Sửa sản Phẩm thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/admin/product');
      });
  }
}
