import { Component, OnInit } from '@angular/core';
import { LogService } from "../services/log.service";

@Component({
  selector: 'app-console-log',
  templateUrl: './console-log.component.html',
  styleUrls: ['./console-log.component.css']
})

export class ConsoleLogComponent implements OnInit {

  logs: [{}];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logs = this.logService.getLogs();
  }
}
