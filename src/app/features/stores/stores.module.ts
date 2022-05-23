import { MaterialModule } from './../../shared/material/material.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    StoresComponent,
    StoreComponent,
    ProductsComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    MaterialModule
  ]
})
export class StoresModule { }
