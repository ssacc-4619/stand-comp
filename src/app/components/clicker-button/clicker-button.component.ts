import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-clicker-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clicker-button.component.html',
  styleUrls: ['./clicker-button.component.scss']
})
export class ClickerButtonComponent {
  
  constructor(public apiService : ApiService) {

  }
}
