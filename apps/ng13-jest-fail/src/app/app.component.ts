import { Component, OnInit } from '@angular/core';
import { isObject } from 'lodash-es';

@Component({
  selector: 'ng13-jest-fail-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng13-jest-fail';

  ngOnInit(): void {
    console.log(isObject(this));
  }

}
