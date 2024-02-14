import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";
import {OneElementComponent} from "./one-element/one-element.component";

@Component({
  selector: 'app-root', standalone: true, imports: [RouterOutlet, ReactiveFormsModule, NgIf, NgFor, OneElementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Game Design tool';
  primaryData = new FormControl('');
  parsedData: number[][] = [];
  maxDepth: number[] = [];
  showError = false;

  ngOnInit() {
    this.primaryData.valueChanges.subscribe((value) => {
      this.showError = false;
      if (!value) {
        return;
      }
      const temp = value.trim().split('\n');
      const temp2 = temp.map((el) => {
        const cutedLine = el.substring(el.indexOf('[') + 1, el.lastIndexOf(']'));
        if (!cutedLine) {
          this.showError = true;
        }
        return cutedLine || '';
      });
      this.parsedData = temp2.map((data) => data.split(', ').map(Number));
      this.maxDepth = new Array(Math.max(...this.parsedData.map(line => Math.max(...line)))+1);
    });
  }
}
