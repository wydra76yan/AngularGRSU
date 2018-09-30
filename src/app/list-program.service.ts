import { Injectable } from '@angular/core';
import { Program } from './programItem';
import { PROGRAMS } from './mocaListProgram';

@Injectable({
  providedIn: 'root'
})
export class ListProgramService {
  getProgram(): Program[] {
    return PROGRAMS;
  }
  constructor() { }
}
