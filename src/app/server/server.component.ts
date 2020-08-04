import {Component} from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `p{
      /*background-color: cornflowerblue;*/
      padding: 20px;
    }`
  ]
})

export class ServerComponent{
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  // tslint:disable-next-line:typedef
  getColor() {
    // tslint:disable-next-line:no-unused-expression
     return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
