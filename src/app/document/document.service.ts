import { Injectable } from '@angular/core';

import {Document} from './document';
import {DocumentList} from './document-list';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }

  getDocuments(): Document[] {
    return DocumentList;
  }
}
