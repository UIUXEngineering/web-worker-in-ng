import { Component } from '@angular/core';
import { WebWorkerService } from './services/web-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(webWorkerService: WebWorkerService) {
    webWorkerService.initialize();
  }
}
