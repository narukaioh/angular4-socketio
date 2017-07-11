import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  socket = io("http://localhost:3000")

  constructor() { }

  ngOnInit() {
    this.socket.on('new-message', function(data) {
      console.log(data)
    })
  }

  sendMessage(teste) {
      this.socket.emit('save-message', { message: 'olar'} )
  }

}
