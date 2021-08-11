import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  img: any;
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  formAddCategory = new FormGroup({
    name: new FormControl(''),
    // photo: new FormControl(''),
  });
  onFile(e: any) {
    this.img = e.target.files[0];
  }
  onSubmit = () => {
    this.categoryService
      .createCategory({ ...this.formAddCategory.value, photo: this.img })
      .subscribe(async (category) => {
        await Swal.fire({
          icon: 'success',
          title: 'Thêm danh mục thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('/admin/category');
      });
  };
}
