import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server not created!';
  serverName='Test';
  serverCreated = false;
  
  constructor() { 
    console.log("Constructor");
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  onServerCreation() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created! Server name is ' + this.serverName;
  }

  onUpdateServer(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
