import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogTestComponent } from 'src/app/components/dialog-test/dialog-test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public favouriteAnimal: string

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public async openDialog(): Promise<void> {
    let dialogRef = this.dialog.open(DialogTestComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.favouriteAnimal = result
      }
    })
  }

}
