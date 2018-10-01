import { Component, OnInit } from '@angular/core';
import {DocumentService} from './document.service';
import {Document} from './document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents: Document[] = [];
  selectedDocument: Document;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.getDocuments();
  }
  getDocuments(): void {
    this.documents = this.documentService.getDocuments();
  }
  onSelect(document: Document): void {
    this.selectedDocument = document;
  }
}
