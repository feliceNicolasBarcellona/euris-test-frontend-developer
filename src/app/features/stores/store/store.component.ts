import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { StoresService } from 'src/app/api/stores.service';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  store: any

  constructor(private storeServices: StoresService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const idStore =  this.activatedRoute.snapshot.params['idStore']
    console.log(idStore)

    this.storeServices.getStoreById(idStore).subscribe(res => {
      this.store = res
      console.log(res);
    })
  }

}

