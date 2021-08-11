import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css'],
})
export class SelectCategoryComponent implements OnInit {
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
}
