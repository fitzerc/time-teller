import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomDate: Date;
  shouldShowTime = false;

  get randomTime(): string {
    if (this.shouldShowTime) {
      return this.formatHours(this.randomDate) + ':' + this.formatMinutes(this.randomDate);
    }

    return "";
  }

  constructor() {
    this.randomDate = this.getDateWithRandTime();
  }

  private formatHours(date: Date): string {
    return date.getHours().toString().length > 1
      ? date.getHours().toString()
      : '0' + date.getHours().toString();
  }

  private formatMinutes(date: Date): string {
    return date.getMinutes().toString().length > 1
      ? date.getMinutes().toString()
      : '0' + date.getMinutes().toString();
  }

  showTime(): void {
    this.shouldShowTime = true;
  }

  reset(): void {
    this.shouldShowTime = false;

    this.randomDate = this.getDateWithRandTime();
  }

  private getDateWithRandTime(): Date {
    const randMin = this.getRandomInt(60);
    const randHour = this.getRandomInt(12) + 1;
    const randDate = new Date();

    randDate.setMinutes(randMin);
    randDate.setHours(randHour);

    return randDate;
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
