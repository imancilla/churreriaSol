import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor ( public _is:InfoService ) {

  }


}
