import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => (<Product>{ key: a.key, ...a.payload.val() as {} }))
      ));
  }

  getProduct(productId) {
    return this.db.object('products/' + productId).valueChanges().pipe(
      map(a => (<Product>{ key: productId, ...a as {} }))
    );
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object("/products/" + productId).remove();
  }


}
