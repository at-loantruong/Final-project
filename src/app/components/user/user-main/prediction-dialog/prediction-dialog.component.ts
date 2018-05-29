import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-prediction-dialog',
  templateUrl: '../prediction-dialog/prediction-dialog.component.html',
  styleUrls: ['../prediction-dialog/prediction-dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class PredictionDialogComponent implements OnInit {

  predictionScoreForm: any;
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {

    this.predictionScoreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      personal: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      phone: new FormControl('', Validators.required),
      score1: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      score2: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
    })
  }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
