import { Component, OnInit } from '@angular/core';
import {Student} from '../model/Student';
import {StudentManagementService} from '../services/student-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponent implements OnInit {
  title = 'Students list';
  public students: Student[];
  public currentStudent: Student;
  constructor(private studentManagement: StudentManagementService,
  private router: Router) {
  }
  ngOnInit(): void {
    this.studentManagement.listStudents()
      .then(students => this.students = students);
  }
  studentDetails(student: Student) {
    this.currentStudent = student;
    this.router.navigate(['/details', this.currentStudent.index]);
  }

}
