import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  pin = '123ABC';
  snackbarDuration = 1.5;
  // tslint:disable-next-line: variable-name
  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }


  openSnackBar(message: string): void{
    this._snackBar.open(message, '', {
      duration: this.snackbarDuration * 100,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  viewQuizQuestions(){}
  startQuiz(){
    this.router.navigateByUrl("game")
  }
  deleteQuiz(){}
}
