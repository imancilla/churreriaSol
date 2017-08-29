import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( public _is:InfoService) {
    
  }

}
