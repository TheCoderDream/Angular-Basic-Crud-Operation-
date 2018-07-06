import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() editedProduct;
  @Output() cancelEdit = new EventEmitter<Product>();
  constructor(private srv: ProductService) { }

  ngOnInit() {
  }

  cancelEdits() {
   this.cancelEdit.emit(null);
  }

  updateProduct(product) {
    this.srv.updateProduct(product);
  }

}
