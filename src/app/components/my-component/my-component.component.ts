import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  results = [];

  constructor(private http: HttpClient) { }   

  ngOnInit(): void {
    debugger;
    this.http.get('http://localhost:1234/db').subscribe(data => {
        this.results = data['demo'];
        console.log(this.results);
    });
  }

}