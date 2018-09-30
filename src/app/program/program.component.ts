import { Component, OnInit } from '@angular/core';
import { ProgramService} from './program.service';
import {Program} from './program';
import {ProgramList} from './program-list';


@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  programs: Program[] = [];
  selectedProgram: Program;
  // programs = ProgramList;
  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.getPrograms();
  }
  getPrograms(): void {
    this.programs = this.programService.getPrograms();
  }
  onSelect(program: Program): void {
    this.selectedProgram = program;
  }
}
