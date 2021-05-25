import { Component } from '@angular/core';
import { TitleService } from './services/route/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-catatalog';
  constructor(private titleService: TitleService){
    this.titleService.refreshTitle();
  }
}
