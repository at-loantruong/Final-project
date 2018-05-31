import { Component, OnInit } from '@angular/core';
import { SoccersService } from '../../../shared/services/soccer.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  userInfo: {};

  constructor(
    private soccersService: SoccersService
  ) {
    this.soccersService.userInfoObsever().subscribe(data => {
      this.userInfo = data;
      console.log('user', data);
    });
  }

  ngOnInit() {
  }

}
