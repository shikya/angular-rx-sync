import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumberStreamService {

  constructor(private http: HttpClient) { }

  // Returns observable
  public getStream(start: number): Observable<number> {
    return new Observable<number>(observer => {
      const that = this;
      let cursor = start;

      function getData() {
        // Try to get data
        that.http.get(`http://localhost:3000/sample/${cursor}`).subscribe((data: IData) => {
          if (data.next !== undefined) {
            // If next var is there
            cursor = data.next;
            // Send chunk of data
            observer.next(cursor);
            getData();
          } else {
            // If this is the last chunk
            observer.complete();
          }
        });
      }

      getData();
    });
  }
}
