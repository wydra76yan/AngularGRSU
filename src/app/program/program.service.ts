import { Injectable } from '@angular/core';

import { Program } from './program';
import { ProgramList } from './program-list';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() { }

  getPrograms(): Program[] {
    return ProgramList;
  }
}
