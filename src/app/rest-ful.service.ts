import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestFulService {

  constructor(private http: HttpClient) { }

  getTodos() {
    console.log("Inside Service");
    return this.http.get('http://localhost:8080/todo');
  }

  hitTodos(id) {

    return this.http.get('http://localhost:8080/todo/' + id);
  }
}
