import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  listProducts: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchListProducts();
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
        this.productService.removeProduct(id).subscribe((data) => {
          console.log(data);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          this.listProducts = this.listProducts.filter(
            (product: any) => product._id !== data._id
          );
        });
      }
    });
  }
  fetchListProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.listProducts = products.itemsList;
    });
  }
}
