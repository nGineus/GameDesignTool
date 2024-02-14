import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-one-element',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './one-element.component.html',
  styleUrl: './one-element.component.scss'
})
export class OneElementComponent {
  @Input() element: number[] | null = null;
  @Input() maxDepth: number[] | null = null;
  @Input() index: number | null = null;
}
