import { Component, OnInit } from '@angular/core';
import { SoccersService } from '../../../../shared/services/soccer.service';

@Component({
  selector: 'app-user-main-content',
  templateUrl: './user-main-content.component.html',
  styleUrls: ['./user-main-content.component.scss']
})
export class UserMainContentComponent implements OnInit {

  soccer: any;

  constructor (private soccersSerivce: SoccersService) {

  }

  getList(): void {
    this.soccersSerivce.getList('leagues').subscribe(data => {
      this.soccer = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.getList();
  }

}
