import {Component, Input, OnInit} from '@angular/core';
import { Program } from '../program/program';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  @Input() program: Program;

  constructor() { }

  ngOnInit() {
  }

}
