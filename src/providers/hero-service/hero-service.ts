import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Md5 } from "ts-md5/dist/md5"; 

/*
  Generated class for the HeroService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroService {
  data: any;
  constructor(public http: Http) {
    console.log("Hello HeroService");
  }

  load() {
    return new Promise(resolve => {
      let md5 = new Md5();

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
          "68c1be64bc9d6e01f7e5b9d83b60bf95d583293ab0bb7e7ae972d4fcbb356317cb10aca8"
      );

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&apikey=b0bb7e7ae972d4fcbb356317cb10aca8&hash=${hash}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getDescription(id: number) {
    return new Promise(resolve => {
      let md5 = new Md5();

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(
        timestamp +
          "68c1be64bc9d6e01f7e5b9d83b60bf95d583293ab0bb7e7ae972d4fcbb356317cb10aca8"
      );

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=b0bb7e7ae972d4fcbb356317cb10aca8&hash=${hash}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}