import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  constructor() {
    setTimeout(() => {this.allowNewServer = true; }, 2000);
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onCreateServer() {
    this.serverCreationStatus = 'Server was created ';
  }

  // tslint:disable-next-line:typedef
  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
