import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from 'src/app/student-details.service';

@Component({
  selector: 'app-mark-sheet',
  templateUrl: './mark-sheet.component.html',
  styleUrls: ['./mark-sheet.component.css']
})

export class MarkSheetComponent implements OnInit {
  indivmarks: any;
 
  constructor(private data:StudentDetailsService) {
    var status = "pass"
   }

   details: any = [];
totalmarks: any;   

  ngOnInit(): void {
    this.GetDetails()
  }

  GetDetails() {
    console.log("hi")
    this.data.getStudentDetails()
      .subscribe(data => {
        this.details.push(data);
        this.details.forEach(eachDetail => {
          console.log(eachDetail)
          eachDetail.forEach(studetails => {
            console.log(studetails.marks)
            this.totalmarks = parseInt(studetails.marks.Maths) + parseInt(studetails.marks.Science) + parseInt(studetails.marks.English);
            console.log(this.totalmarks)
            studetails.totalmarks = this.totalmarks;
            if(parseInt(studetails.marks.Maths) > 20 && parseInt(studetails.marks.Science) > 20 && parseInt(studetails.marks.English) > 20 ) {
              status = "pass";
              studetails.status = status; 
            }
            else {
              status = "fail";
              studetails.status = status; 
            }
          });
        });
      });
      
   
       console.log(this.details)

    }
}
