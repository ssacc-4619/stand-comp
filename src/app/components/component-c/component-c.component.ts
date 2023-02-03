import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-component-c',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent {
  constructor(public apiService : ApiService) {
    
  }
}
