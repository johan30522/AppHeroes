import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
     private readonly dialogRef:MatDialogRef<ConfirmComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Heroe
     ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

public confirmar(){
  this.dialogRef.close(true);
}
public cancelar(){
  this.dialogRef.close();
}

}
