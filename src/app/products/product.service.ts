import {Injectable} from '@angular/core';
import {PRODUCT_ITEMS} from './product-data';
import {Product} from './product';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ProductService {

  products = PRODUCT_ITEMS;
  productsChanged = new Subject();

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products);
  }

  updateProduct(product: Product) {

    const produc =this.products.find((pr) => pr.id === product.id );
    this.products[produc.id - 1] = product;
    this.productsChanged.next(this.products);
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
    this.productsChanged.next(this.products);

  }


}
