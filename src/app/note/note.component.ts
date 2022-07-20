import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @HostBinding('class.note')
  hostClassName = true;

  @Input()
  title: string;

  @Input()
  detail: string;

  @Input()
  completed: boolean;

  @Output()
  completeChange = new EventEmitter<boolean>();

  @Output()
  deleteNote = new EventEmitter<void>();

  readonly bgColor = new BehaviorSubject<string>('#ffffff');

  constructor() {}

  ngOnInit() {}

  onCompletedChange(value: unknown): void {
    console.log(value);
    // this.completeChange.emit(value);
  }

  onDeleteClick(): void {
    this.deleteNote.emit();
  }

  onSeverityChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);

    if (value === 'imp') {
      this.bgColor.next('#ff0000');
    } else if (value === 'low') {
      this.bgColor.next('#00ff00');
    } else {
      this.bgColor.next('#ffff00');
    }

    console.log(this.bgColor.value);
  }
}
