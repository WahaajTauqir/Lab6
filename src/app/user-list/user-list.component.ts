import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: true,
  imports: [CommonModule, UserDetailComponent]
})
export class UserListComponent {
  @Input() users: { name: string; email: string }[] = [];
  @Output() userRemoved = new EventEmitter<number>();

  removeUser(index: number) {
    this.userRemoved.emit(index);
  }
}
