import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-reuseable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-output-reuseable.component.html',
  styleUrl: './input-output-reuseable.component.css'
})
export class InputOutputReuseableComponent {

  @Input() message: string = '';
  @Input() alertType: string  = '';


}
