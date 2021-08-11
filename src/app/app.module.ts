import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SlideComponent } from './component/slide/slide.component';
import { DashboardComponent } from './layoutAdmin/dashboard/dashboard.component';
import { LayoutUserComponent } from './frontend/layout-user/layout-user.component';
import { ProductsComponent } from './layoutAdmin/products/products.component';
import { AdminComponent } from './layoutAdmin/admin/admin.component';
import { AddProductComponent } from './layoutAdmin/add-product/add-product.component';
import { EditProductComponent } from './layoutAdmin/product/edit-product/edit-product.component';
import { ListCategoryComponent } from './layoutAdmin/categories/list-category/list-category.component';
import { AddCategoryComponent } from './layoutAdmin/categories/add-category/add-category.component';
import { EditCategoryComponent } from './layoutAdmin/categories/edit-category/edit-category.component';
import { SelectCategoryComponent } from './component/select-category/select-category.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    SlideComponent,
    DashboardComponent,
    LayoutUserComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    SelectCategoryComponent,
    DetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
