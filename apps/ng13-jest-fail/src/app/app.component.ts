import { Component, OnInit } from '@angular/core';
import { isObject } from 'lodash-es';
import { Query, Store } from '@datorama/akita';

interface TestState {
  valid: boolean;
}

export class TestStore extends Store<TestState> {
  constructor() {
    super({
      valid: false,
    })
  }
}

export class TestQuery extends Query<TestState> {
  constructor(
    override readonly store: TestStore,
  ) {
    super(store);
  }
}

@Component({
  selector: 'ng13-jest-fail-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng13-jest-fail';

  constructor(
    readonly query: TestQuery,
  ) {}

  ngOnInit(): void {
    console.log(isObject(this));
  }

}
