import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Dashboard Application, home route works!
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
