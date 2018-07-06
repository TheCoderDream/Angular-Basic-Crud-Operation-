import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { clone } from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {

  products: Product[];
  editMode = false;
  selectedProduct;


  constructor(private srv: ProductService) {}
  ngOnInit() {
    this.getProducts();
    this.srv.productsChanged.subscribe((products: Product[]) => {this.products = products;});

  }

  getProducts() {
    this.products = this.srv.getProducts();
  }

  onEditProduct(product) {
    this.selectedProduct = product;
  }

  onRemoveProduct(product) {
    this.srv.deleteProduct(product);
  }

  cancelEdit() {
    this.selectedProduct = null;
  }

}
