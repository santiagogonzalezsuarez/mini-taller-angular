import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.scss']
})
export class DialogTestComponent implements OnInit {
  public animal: string
  @Output("selectAnimal") public OnSelectAnimal = new EventEmitter<string>()

  constructor(
    public dialogRef: MatDialogRef<DialogTestComponent>
  ) { }

  ngOnInit(): void {
  }

  public onCancelClick(): void {
    this.dialogRef.close(null)
  }

  public onOkClick(): void {
    this.dialogRef.close(this.animal)
  }

}
