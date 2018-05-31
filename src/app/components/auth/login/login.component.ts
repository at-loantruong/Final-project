import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, useAnimation } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SoccersService } from '../../../shared/services/soccer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: '../../auth/login/login.component.html',
  styleUrls: ['../../auth/login/login.component.scss'],
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
export class LoginComponent {
  loginForm: any;
  router: Router;

  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private soccersService: SoccersService
  ) {
    this.loginForm = new FormGroup({
      // username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onLogin() {
    const userInfo = this.loginForm.value;
    this.soccersService.login('user/login', userInfo).subscribe( data => {
      localStorage.setItem('access_token', data['token']);
      this.close();
    },
      (err) => { throw err; },
      () => console.log('success'));
  }
}
