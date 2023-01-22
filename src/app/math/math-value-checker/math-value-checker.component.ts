import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MathExercise} from "../../model/MathExercise";

@Component({
  selector: 'app-math-value-checker',
  templateUrl: './math-value-checker.component.html',
  styleUrls: ['./math-value-checker.component.scss']
})
export class MathValueCheckerComponent implements OnInit {

  @Input() mathExercise: MathExercise;
  @Output() mathChanges = new EventEmitter<MathExercise>();

  constructor() {
  }

  ngOnInit() {
  }

  setResult(event: any) {
    this.mathExercise.givenResult = Number(event.target.value);
    this.mathChanges.emit(this.mathExercise);
  }
}
