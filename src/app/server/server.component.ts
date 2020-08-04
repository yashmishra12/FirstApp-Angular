import {Component} from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `p{
      background-color: cornflowerblue;
      padding: 20px;
    }`
  ]
})
export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = 'offline';
}
