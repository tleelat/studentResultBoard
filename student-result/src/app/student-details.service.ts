import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const studentDetailsUrl = 'C:/Users/leela tikkisetty/codeprojects/studentResultBoard/student-result/src/assets/data.JSON';


@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor(private http: HttpClient) { 
  }

  getStudentDetails(){
    console.log("inside service")
   return this.http.get("assets/data.JSON");
  }

}
