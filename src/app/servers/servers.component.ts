import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'Button Click: No Server was created';
  serverName = 'Default Name';
  constructor() {
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Button Click: Server was created with the name: ' + this.serverName;
  }

  // tslint:disable-next-line:typedef
  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
