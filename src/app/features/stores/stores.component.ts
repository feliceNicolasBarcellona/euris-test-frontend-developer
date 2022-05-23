import { Component, OnInit } from '@angular/core';
import { StoresService } from 'src/app/api/stores.service';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'eur-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  stores: Store[] | null = null

  constructor(private storeService: StoresService) { }

  ngOnInit(): void {
    this.storeService.getStores().subscribe(res => this.stores = res.map(res => ({
      id: res.id,
      category: res.data.category,
      name: res.data.name,
      employees: res.data.employees,

    })))
  }

}
