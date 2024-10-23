import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserListComponent]
})
export class AppComponent {
  users: { name: string; email: string }[] = []; // Explicitly type the array
  newUserForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  userDeletedMessage = '';

  addUser() {
    if (this.newUserForm.valid) {
      this.users.push(this.newUserForm.value as { name: string; email: string });
      this.newUserForm.reset();
    }
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
    this.userDeletedMessage = 'User deleted successfully!';
  }
}
