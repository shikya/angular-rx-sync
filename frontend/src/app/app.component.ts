import { Component, OnInit } from '@angular/core';
import { NumberStreamService } from './numberstream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  status: number;
  isLoading = false;

  constructor(private streamService: NumberStreamService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.fetchStream();
  }

  fetchStream() {
    const context = this;
    context.isLoading = true;
    // Start streaming data
    this.streamService.getStream(0).subscribe({
      next(data: number) {

        // Chunk of data
        context.status = data;
      },
      error(err) {

        // Any error should be handled here
        console.error(err);
      },
      complete() {

        // Once there is nothing to finish
        context.isLoading = false;
      }
    });
  }
}
