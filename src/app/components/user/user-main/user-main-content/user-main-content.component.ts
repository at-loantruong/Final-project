import { Component, OnInit } from '@angular/core';
import { SoccersService } from '../../../../shared/services/soccer.service';

@Component({
  selector: 'app-user-main-content',
  templateUrl: './user-main-content.component.html',
  styleUrls: ['./user-main-content.component.scss']
})
export class UserMainContentComponent implements OnInit {

  soccer: any;
  //display: boolean = false;

  constructor (private soccersSerivce: SoccersService) {

  }

  getList(): void {
    this.soccersSerivce.getList().subscribe(data => {
      this.soccer = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.getList();
  }

}
