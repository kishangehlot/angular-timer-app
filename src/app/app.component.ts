import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-timer-app';
  timer: any;
  minutes: number = 5;
  seconds: number = 0;
  isPaused: boolean = true;

  ngOnInit() {
    this.resetTimer();
  }

  startTimer() {
    this.isPaused = false;
    this.timer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        if (this.minutes === 0) {
          this.resetTimer();
          alert("Timer has ended!");
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      }
    }, 1000);
  }

  pauseTimer() {
    this.isPaused = true;
    clearInterval(this.timer);
  }

  resetTimer() {
    this.isPaused = true;
    clearInterval(this.timer);
    this.minutes = 5;
    this.seconds = 0;
  }

  resumeTimer() {
    if (this.minutes > 0 || this.seconds > 0) {
      this.isPaused = false;
      this.timer = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else {
          if (this.minutes === 0) {
            this.resetTimer();
            alert("Timer has ended!");
          } else {
            this.minutes--;
            this.seconds = 59;
          }
        }
      }, 1000);
    }
  }
}
