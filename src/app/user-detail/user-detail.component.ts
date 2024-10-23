import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class UserDetailComponent {
  @Input() user!: { name: string; email: string };
  @Output() remove = new EventEmitter<void>();

  removeUser() {
    this.remove.emit();
  }
}
