import { Component, Input, OnInit } from '@angular/core';
import {Student} from '../../model/Student';
import {StudentManagementService} from '../../services/student-management.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input('student')
  public student: Student;
  constructor(private studentMenagement: StudentManagementService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) => this.studentMenagement.studentDetails(+params.get('index')))
      .subscribe(student => this.student = student);
  }

}
