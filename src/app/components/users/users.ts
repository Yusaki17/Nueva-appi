import { Component, inject } from '@angular/core';
import { ConfigService } from '../../services/config-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
private configService = inject(ConfigService);
users$ = this.configService.getUser();
}