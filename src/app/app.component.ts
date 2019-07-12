import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Alejandro';
  fullName = 'alejAndro anTonio fernandez vaRas';
  arrayNum = [1, 5, 3, 20, 4];
  PI = Math.PI;
  numberPercent = 0.26;
  salary = 1500000;

  hero = {
    name: 'batman',
    age: 35,
    city: 'gotham'
  };
  video = 'bjJ7KCBykVU';
  show = true;

  currentDate = new Date();

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('llego data'), 3500);
  });

}
