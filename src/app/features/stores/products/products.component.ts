import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { StoresService } from 'src/app/api/stores.service';
import { PData, Product } from 'src/app/models/product';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'eur-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  product!: Product

  constructor(private storeService: StoresService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.storeService.getProducts().subscribe((res) => {
      this.products = res.map(res => ({
        id: res.id,
        title: res.data.title,
        description: res.data.description,
        price: +res.data.price,
        employee: res.data.employee,
        reviews: res.data.reviews,
        category: res.data.category
      }))
    })
  }

  deleteHandler(productToDelete: Product) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: productToDelete,
    });

    dialogRef.afterClosed().subscribe((id: string) => {
      if (id) {
        this.storeService.deleteProduct(id).pipe(delay(1000))
          .subscribe(() => {
            if (this.products) {
              this.products = this.products.filter((u) => u.id !== productToDelete.id);
            }
          });
      }
    });
  }

}
