import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {
  @Input() activeImageUrl = '';
  @Input() running = false;
  @Output() nextSlide = new EventEmitter();
}
