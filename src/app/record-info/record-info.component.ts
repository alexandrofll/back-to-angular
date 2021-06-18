import { Component, OnInit } from '@angular/core';
import { RecordService} from "../record.service"

@Component({
  selector: 'app-record-info',
  templateUrl: './record-info.component.html',
  styleUrls: ['./record-info.component.css'],
  providers: [RecordService]
})

export class RecordInfoComponent implements OnInit {

  info1: string[] = [];
  info2: string[] = [];
  info3: string[] = [];

  getInfo1(){
    this.info1 = this.recordService.getInfo1();
  }

  getInfo2(){
    this.info1 = this.recordService.getInfo2();
  }

  getInfo3(){
    this.info1 = this.recordService.getInfo3();
  }

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
  }

}
