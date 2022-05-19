import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-confirm-heroe',
  templateUrl: './confirm-heroe.component.html',
  styleUrls: ['./confirm-heroe.component.scss'],
})
export class ConfirmHeroeComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ConfirmHeroeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe) {}

  ngOnInit(): void {}

  delete(): void {
    this.dialogRef.close(true);
  }

  closed(): void {
    this.dialogRef.close();
  }
}
