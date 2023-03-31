import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  selector: 'app-product-not-found-dialog',
  templateUrl: './product-not-found-dialog.component.html',
  styleUrls: ['./product-not-found-dialog.component.scss'],
})
export class ProductNotFoundDialogComponent {
  constructor(public dialog: MatDialog) {}

  closeDialog() {
    this.dialog.closeAll();
  }
}
