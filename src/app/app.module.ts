import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  declarations: [AppComponent, NoteComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
