import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ViewQuotesComponent } from './view-quotes/view-quotes.component';
import { OutputComponent } from './output/output.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from '../date-count-pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    ViewQuotesComponent,
    OutputComponent,
    QuoteFormComponent,
    DateCountPipe
  ],

  imports: [
    
    BrowserModule,
    AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
