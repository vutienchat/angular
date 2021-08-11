// import { AddproductComponent } from './addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
// import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './layoutAdmin/dashboard/dashboard.component';
import { LayoutUserComponent } from './frontend/layout-user/layout-user.component';
import { ProductsComponent } from './layoutAdmin/products/products.component';
import { AdminComponent } from './layoutAdmin/admin/admin.component';
import { AddProductComponent } from './layoutAdmin/add-product/add-product.component';
import { EditProductComponent } from './layoutAdmin/product/edit-product/edit-product.component';
import { ListCategoryComponent } from './layoutAdmin/categories/list-category/list-category.component';
import { AddCategoryComponent } from './layoutAdmin/categories/add-category/add-category.component';
import { EditCategoryComponent } from './layoutAdmin/categories/edit-category/edit-category.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutUserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'detail/:id', component: DetailPageComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product', component: ProductsComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'edit-product/:id', component: EditProductComponent },
      { path: 'category', component: ListCategoryComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'edit-category/:id', component: EditCategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
