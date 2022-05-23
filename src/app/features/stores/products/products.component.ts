
import { Component, OnInit } from '@angular/core';
import { StoresService } from 'src/app/api/stores.service';
import { PData } from 'src/app/models/product';
import { Data } from 'src/app/models/store';


@Component({
  selector: 'eur-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = []

  constructor(private storeService: StoresService) { }

  ngOnInit(): void {
    this.storeService.getProducts().subscribe(res => {
      this.products = res.map(res => ({
        id: res.id,
        title: res.data.title,
        description: res.data.description,
        price: +res.data.price,
        employee: res.data.employee,
        reviews: res.data.reviews
      }))
  })
  }

}
