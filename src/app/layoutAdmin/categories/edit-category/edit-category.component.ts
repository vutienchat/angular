import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { data } from '../../../../../../my-app/src/app/mock-products';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  category: any;
  img: any;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchById();
  }
  formEditCategory = new FormGroup({
    name: new FormControl(''),
    // photo: new FormControl(''),
  });
  onFile(e: any) {
    this.img = e.target.files[0];
  }
  onSubmit = () => {
    const dataSubmit = this.img
      ? { ...this.formEditCategory.value, photo: this.img }
      : { ...this.formEditCategory.value };

    this.categoryService
      .updateCategory(dataSubmit, this.category._id)
      .subscribe(async (category) => {
        await Swal.fire({
          icon: 'success',
          title: 'Sửa danh mục thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/admin/category');
      });
  };
  fetchById() {
    this.route.params.subscribe((params) => {
      this.categoryService.getById(params.id).subscribe((category) => {
        this.category = category;
        if (category.name) {
          this.formEditCategory.setValue({
            name: category.name,
          });
        }
      });
    });
  }
}
