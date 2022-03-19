import { Time } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input() randomDate = new Date();
  @ViewChild('hrHand', {static: true}) hrHand!: ElementRef;
  @ViewChild('minHand', {static: true}) minHand!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  //use in *ngIf to trigger this method on input change
  get updateClock(): boolean {
    this.minHand.nativeElement.style.transform = 'rotate(' +
      this.randomDate.getMinutes() * 6 + 'deg';

    this.hrHand.nativeElement.style.transform = 'rotate(' +
      (this.randomDate.getHours() * 30 + this.randomDate.getMinutes() * 0.5) + 'deg)';
    
    return false;
  }
}
