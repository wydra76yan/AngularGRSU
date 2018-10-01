import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramComponent } from './program/program.component';
import { DocumentComponent } from './document/document.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramDetailComponent } from './program-detail/program-detail.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    ProgramComponent,
    DocumentComponent,
    ReviewsComponent,
    ProgramDetailComponent,
    DocumentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
