import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent {
  constructor(public apiService : ApiService) {
    
  }
}
