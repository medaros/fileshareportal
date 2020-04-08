import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FilesComponent } from './files.component';
import { customTextPipe } from 'src/app/pipes/text.pipe';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FilesComponent, customTextPipe],
  exports: [FilesComponent]
})
export class FilesComponentModule {}
