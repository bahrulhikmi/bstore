import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import { take } from 'rxjs/operators';
import { Product } from 'shared/models/product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {} as Product;
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).pipe(take(1)).subscribe(p => this.product = p);
    }

  }

  ngOnInit(): void {
  }

  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm("Yakin mau menghapus produk ini?")) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);

  }

}
