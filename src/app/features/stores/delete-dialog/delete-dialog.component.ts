import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'eur-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) {
    // data received when dialog is opened
    console.log('open dialog', product);

 }


}
