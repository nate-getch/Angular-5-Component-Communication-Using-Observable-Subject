import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

  ngOnInit() {
  }

}
