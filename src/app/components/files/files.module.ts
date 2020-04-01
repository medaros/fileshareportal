import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FilesComponent } from './files.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FilesComponent],
  exports: [FilesComponent]
})
export class FilesComponentModule {}
