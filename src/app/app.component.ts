import { Component, OnInit } from '@angular/core';
import { Info }              from './info'
import { InfoService }       from './info.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  implements OnInit {
  title = 'Team maker';
  info: Info = {
    developersNumber: 0,
    projectsNumber: 0
  };
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getInfo()
                    .then(response => this.info = response);
  }
}
