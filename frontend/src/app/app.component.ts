import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    const arr = [];
    for (let i = 0 ; i < 100 ; i++) {
      arr.push(i);
    }

    arr.map(i => {
      this.http.get(`http://localhost:3000/sample/${i}`).subscribe(data => {
        this.array.push(data);
      });
    });

  }
}
