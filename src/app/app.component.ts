import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;

  constructor() {
    this.username = '';
  }

  isUsernameEmpty(): boolean {
    return this.username.length === 0;
  }

  resetUsername(): void {
    this.setUsername('');
  }

  setUsername(username: string): void {
    this.username = username;
  }
}
