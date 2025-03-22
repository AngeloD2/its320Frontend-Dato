import { Component } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

type Quotes = {
  _id: string;
  author: string;
  title?: string
  quote: string;
  date: string;
}

@Component({
  selector: 'displayquotes',
  imports: [],
  templateUrl: './displayquotes.component.html',
  styleUrl: './displayquotes.component.css'
})

export class DisplayquotesComponent {

  constructor(private newQuotes: QuotesService) { }
  
  quotes: Quotes[] = [];

  async ngOnInit() {
    this.newQuotes.Get().subscribe(
      (quotes: typeof this.quotes) => {
        console.log('here', quotes)
        return (this.quotes = quotes);
      }
    )
  }
}
