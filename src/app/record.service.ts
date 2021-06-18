import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  info1: string[] = ["Record1", "Phone1", "Email1" ]
  info2: string[] = ["Record2", "Phone2", "Email2" ]
  info3: string[] = ["Record3", "Phone3", "Email3" ]

  getInfo1(): string[]{
    return this.info1;
  }

  getInfo2(): string[]{
    return this.info2;
  }

  getInfo3(): string[]{
    return this.info3;
  }

  constructor() { }
}
