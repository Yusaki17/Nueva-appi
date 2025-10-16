import { Component, inject } from '@angular/core';
import { ConfigService } from '../../services/config-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  private configService = inject(ConfigService);
  posts$ = this.configService.getPost();
}