import { Component, OnInit } from '@angular/core';
import { Program } from '../programItem';
import { ListProgramService } from '../list-program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  selectedProgram: Program;
 
  programs: Program[];
  constructor(private programService: ListProgramService) { }

  ngOnInit() {
    this.getProgram();
  }

  getProgram(): void {
    this.programs = this.programService.getProgram();
  }

}
