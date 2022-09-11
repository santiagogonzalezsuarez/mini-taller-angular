import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
const MaterialComponents = [MatButtonModule, MatCardModule, MatToolbarModule];

@NgModule({
  imports: [
    MaterialComponents,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MaterialComponents,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class MaterialModule {}
