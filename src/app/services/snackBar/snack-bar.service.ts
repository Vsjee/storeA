import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  horizontalPositionSnack: MatSnackBarHorizontalPosition = 'end';
  verticalPositionSnack: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snack: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snack.open(message, action, {
      horizontalPosition: this.horizontalPositionSnack,
      verticalPosition: this.verticalPositionSnack,
    });
  }
}
