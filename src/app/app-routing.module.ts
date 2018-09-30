import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentComponent } from './document/document.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProgramComponent } from './program/program.component';


const routes: Routes = [
  { path: '', redirectTo: '/program', pathMatch: 'full' },
  { path: 'program', component: ProgramComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'reviews', component: ReviewsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
