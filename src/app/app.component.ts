import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
