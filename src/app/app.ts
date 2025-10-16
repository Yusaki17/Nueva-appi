import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostList } from './components/post-list/post-list';
import { CommonModule } from '@angular/common';
import { Users } from "./components/users/users";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostList, CommonModule, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-api');
}