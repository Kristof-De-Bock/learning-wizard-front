import {Component, OnInit} from '@angular/core';
import {MathExercise} from '../../model/MathExercise';
import {MathService} from '../../service/MathService';
import {Observable} from 'rxjs';
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-sum-main',
  templateUrl: './math-main.component.html',
  styleUrls: ['./math-main.component.scss']
})
export class MathMainComponent implements OnInit {
  private confettiCanonInterval;

  mathExercises: Observable<Array<MathExercise>>;

  constructor(private mathService: MathService) {
  }

  ngOnInit() {
    this.mathExercises = this.mathService.getExercises();
  }

  checkResult(result: MathExercise) {
    if (result.result === result.givenResult) {
      this.confettiCanon();
      this.confettiCanonInterval = setInterval(() => this.confettiCanon(), 100);
      clearInterval(this.confettiCanonInterval);
    }
  }

  formatExercise(exercise: MathExercise) {
    return `${exercise.firstDigit} ${exercise.sign} ${exercise.secondDigit} = `;
  }

  refresh() {
    this.mathExercises = this.mathService.getExercises();
  }

  confettiCanon() {
    const colors = ['#FFFFFF', '#C81A23', '#FFA144', '#3CB7AE'];

    confetti({
      particleCount: 200,
      angle: 60,
      spread: 55,
      origin: {x: 0},
      colors,
    });

    confetti({
      particleCount: 200,
      angle: 120,
      spread: 55,
      origin: {x: 1},
      colors,
    });
  }

}
