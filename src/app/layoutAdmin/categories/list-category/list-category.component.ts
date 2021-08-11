import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent implements OnInit {
  categories: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchCategoris();
  }
  fetchCategoris() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  Remove(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.removeCategory(id).subscribe((data) => {
          this.categories = this.categories.filter(
            (category: any) => category._id !== data._id
          );
        });
      }
    });
  }
}
