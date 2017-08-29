import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {

  info:any = {};
  Finfo:any = {};

  charged:boolean = false;
  Fbase:boolean = false;


  Furl:string = 'https://servicecommunity-4c5bd.firebaseio.com/Entities/';
  Fproject:string = 'SolChurreria';

  constructor( public http:Http ) {
    this.staticstorage();
    this.firebase();
  }

  public staticstorage () {
    this.http.get('assets/data/info.json').subscribe( data => {
      this.charged = true;
      this.info = data.json();
    });
  }

  public firebase () {
    this.http.get(this.Furl+this.Fproject+'.json').subscribe( data => {
      this.Fbase = true;
      console.log(data.json());
      this.Finfo = data.json();
    })
  }
}
