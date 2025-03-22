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
  selector: 'app-display-users',
  imports: [],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css'
})

export class DisplayUsersComponent {

  constructor(private newQuotes: QuotesService) { }
  
  quotes: Quotes[] = [];

  async ngOnInit() {
    this.newQuotes.Get().subscribe(
      (quotes: typeof this.quotes) => {
        return (this.quotes = quotes);
      }
    )
  }
}
