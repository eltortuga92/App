import { Component } from '@angular/core';
import { INote } from './note';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  notes: Array<INote> = [];
  notesCreated = 0;

  onAddNoteClick(): void {
    this.notesCreated++;

    const note: INote = {
      id: this.notesCreated,
      title: `Note ${this.notesCreated}`,
      detail: '',
      completed: false,
    };

    this.notes.push(note);
  }

  onCompletedChange(isCompleted: boolean, id: number) {
    const note = this.notes.find((note: INote) => note.id === id);
    note.completed = isCompleted;
  }

  onDeleteNote(id: number) {
    this.notes = this.notes.filter((note: INote) => note.id !== id);
  }
}
